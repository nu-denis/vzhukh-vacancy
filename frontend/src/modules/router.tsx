import React from 'react';
import { Routes, Route } from 'react-router';

import Index from '../pages/Index';
import Rewriter from '../pages/Rewriter';
import Title from '../pages/Title';
import Prerequisites from '../pages/Prerequisites';
import Functions from '../pages/Functions';

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/rewriter" element={<Rewriter />} />
            <Route path="/creator/title" element={<Title />} />
            <Route path="/creator/functions" element={<Functions />} />
            <Route path="/creator/prerequisites" element={<Prerequisites />} />
        </Routes>
    );
};

export default Router;