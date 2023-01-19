import './App.css';
import React from 'react';
import ElementTransfer from './components/element_transfer/ElementTransfer';
import ButtonAppBar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import NestedList from './components/Nested_list_component/NestedList';
import Infinite from './components/InfiniteScroll/InfiniteScroll';
import Game from './components/Game/Game';
import BoxSplitter from './components/Box split/Boxsplit';

const App = () => {

  const items = [
    {
      id: 1,
      name: "Parent 1",
      children: [
        {
          id: 2,
          name: "Child 1",
          children: [
            {
              id: 3,
              name: "Grandchild 1",
            },
            {
              id: 4,
              name: "Grandchild 2",
            },
          ],
        },
        {
          id: 5,
          name: "Child 2",
        },
      ],
    },
    {
      id: 6,
      name: "Parent 2",
    },
  ];

  function handleClick(item) {
    console.log(item);
  }

  return (
    <div>
      <ButtonAppBar />
      <Routes>
        <Route path="/" element={<ElementTransfer />} />
        <Route path="/nestedlist" element={<NestedList items={items} onClick={handleClick} />} />
        <Route path='/Infinitescroll' element={<Infinite />} />
        <Route path='/game' element={<Game />} />
        <Route path='/boxsplit' element={<BoxSplitter initialSize={500} />} />
      </Routes>
    </div>
  );
};

export default App;


