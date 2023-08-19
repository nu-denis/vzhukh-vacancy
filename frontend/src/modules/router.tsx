import React from 'react';
import { Routes, Route } from 'react-router';

import Index from '../pages/Index';
import Rewriter from '../pages/Rewriter';
import Title from '../pages/Title';
import Prerequisites from '../pages/Prerequisites';
import Functions from '../pages/Functions';
import Result from '../pages/Result';
import FastGeneration from '../pages/FastGeneration';

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/rewriter" element={<Rewriter />} />
            <Route path="/creator/title" element={<Title />} />
            <Route path="/creator/functions" element={<Functions />} />
            <Route path="/creator/prerequisites" element={<Prerequisites />} />
            <Route path="/creator/result" element={<Result />} />
            <Route path="/fast_generation" element={<FastGeneration />} />
        </Routes>
    );
};

export default Router;