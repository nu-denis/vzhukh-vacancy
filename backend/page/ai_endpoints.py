from typing import Optional
import http.client
import json
import ssl
from bs4 import BeautifulSoup

from router import router
from fastapi import Body
import openai
import urllib

openai.api_key = 'key_mock'
openai.api_base = 'https://llmgtw.hhdev.ru/openai/hack{}'.format(14)


def unquote_text(text: str) -> str:
    return urllib.parse.unquote(text)


def get_text_from_resp(resp) -> str:
    return resp['choices'][0]['message']['content']


def ai_request(messages: list):
    return openai.ChatCompletion.create(
        model='gpt-3.5-turbo',
        messages=messages
    )


@router.get('/open_format')
async def open_format(content_text: str = ''):
    if not content_text:
        return ''

    return get_text_from_resp(ai_request([{
        'role': 'user',
        'content': content_text
    }]))


@router.post('/open_format')
async def open_format(content_text: Optional[str] = Body(embed=True)):  # TODO: validate parameter
    if not content_text:
        return ''

    return get_text_from_resp(ai_request([{
        'role': 'user',
        'content': content_text
    }]))


@router.get('/vacancy_name')
async def vacancy_name(description: str = ''):
    prompt_vacancy = 'Предложи название вакансии по описанию: {} по шаблону: (Название вакансии: ОТВЕТ)'

    return get_text_from_resp(ai_request([{
        'role': 'user',
        'content': prompt_vacancy.format(description)
    }]))


@router.get('/several_vacancy_names')
async def vacancy_name(description: str = ''):
    prompt_vacancy = 'Предложи 5 названий вакансий по описанию: {}'

    return get_text_from_resp(ai_request([{
        'role': 'user',
        'content': prompt_vacancy.format(description)
    }]))


@router.get('/vacancy_text')
async def vacancy_text(vacancy_name: str = '', description: str = ''):
    vacancy_blocks = 'Описание вакансии, Обязанности, Требования, Условия'
    prompt_vacancy_text = 'Напиши текст для вакансии: {} в вейп-шоп, с учётом текста: {} в формате Markdown и оставь ' \
                          'только разделы: {}'

    return get_text_from_resp(ai_request([{
        'role': 'user',
        'content': prompt_vacancy_text.format(vacancy_name, description, vacancy_blocks)
    }]))


@router.get('/vacancy_text_for_company')
async def vacancy_text(
        vacancy_name: str = '',
        company_description: str = '',
        description: str = '',
        vacancy_blocks: str = 'Описание вакансии, Обязанности, Требования, Условия'
):
    prompt_vacancy_text = 'Напиши текст вакансии: {} для компании в сфере {}, с учётом текста: {} в формате Markdown и оставь ' \
                          'только разделы: {}'

    return get_text_from_resp(ai_request([{
        'role': 'user',
        'content': prompt_vacancy_text.format(vacancy_name, company_description, description, vacancy_blocks)
    }]))


@router.get('/prettify/vacancy/{vacancy_id}')
async def prettify_vacancy(vacancy_id: str):
    prompt_template = 'ты рекрутер, распиши обязанности, требования и условия для вакансии: {vac_description}'

    host = '94.124.200.0'  # hh.ru, api.hh.ru
    conn = http.client.HTTPSConnection(host, context=ssl._create_unverified_context())
    conn.request('GET', f'/vacancies/{vacancy_id}', headers={
        'Accept': 'application/json',
        'Host': 'api.hh.ru',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    })
    response = conn.getresponse()
    vacancy_json = json.loads(response.read()) if response.status < 400 else None

    raw_vac_text = BeautifulSoup(vacancy_json['description']).get_text()
    text = prompt_template.format(vac_description=raw_vac_text)

    return get_text_from_resp(ai_request([{'role': 'user', 'content': text}]))
