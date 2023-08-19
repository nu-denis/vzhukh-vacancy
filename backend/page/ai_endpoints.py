from typing import Optional

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


@router.get('/vacancy_text')
async def vacancy_text(vacancy_name: str = '', description: str = ''):
    vacancy_blocks = 'Описание вакансии, Обязанности, Требования, Условия'
    prompt_vacancy_text = 'Напиши текст для вакансии: {} в вейп-шоп, с учётом текста: {} в формате Markdown и оставь ' \
                          'только разделы: {}'

    return get_text_from_resp(ai_request([{
        'role': 'user',
        'content': prompt_vacancy_text.format(vacancy_name, description, vacancy_blocks)
    }]))
