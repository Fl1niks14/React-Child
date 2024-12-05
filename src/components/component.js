import React, { useState, createContext, useContext } from 'react';

const ClickContext = createContext();
const ParentComponent = () => {
    const [clicks, setClicks] = useState(0);

    const incrementClicks = () => {
        setClicks(prev => prev + 1);
    };

    return (
        <ClickContext.Provider value={incrementClicks}>
            <div>
                <h1>Количество кликов: {clicks}</h1>
                <FirstChild />
            </div>
        </ClickContext.Provider>
    );
};

const FirstChild = () => {
    return (
        <div>
            <h2>Первый компонент</h2>
            <SecondChild />
        </div>
    );
};

const SecondChild = () => {
    return (
        <div>
            <h2>Второй компонент</h2>
            <ThirdChild />
        </div>
    );
};

const ThirdChild = () => {
    return (
        <div>
            <h2>Третий компонент</h2>
            <FourthChild />
        </div>
    );
};

const FourthChild = () => {
    return (
        <div>
            <h2>Четвертый компонент</h2>
            <LastChild />
        </div>
    );
};

const LastChild = () => {
    const incrementClicks = useContext(ClickContext);

    return (
        <div>
            <h2>Последний компонент</h2>
            <button onClick={incrementClicks}>Кликнуть</button>
        </div>
    );
};

export default ParentComponent;