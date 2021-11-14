import React from 'react';

const EventsExample = () => {
    const [value, setValue] = React.useState<string>('');
    const [isDrag, setIsDrag] = React.useState<boolean>(false);
    const inputRef = React.useRef<HTMLInputElement>(null);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value);
        console.log(inputRef.current?.value);
    };

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG');
    };

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
        console.log('DROP');
    };

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    };

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    };

    return (
        <div  style={{ padding: 15, border: '1px solid gray' }}>
            <h3>Input</h3>
            <input
                value={value}
                onChange={changeHandler}
                type="text"
                placeholder="Управляемый"
            />
            <input ref={inputRef} type="text" placeholder="Неуправляемый" />
            <button onClick={clickHandler}>Кнопка</button>
            <h3>Drag&Drop</h3>
            <div
                onDrag={dragHandler}
                draggable
                style={{ width: 200, height: 200, background: 'red' }}
            ></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{
                    width: 200,
                    height: 200,
                    background: isDrag ? 'blue' : 'red',
                    marginTop: 15,
                }}
            ></div>
        </div>
    );
};

export default EventsExample;
