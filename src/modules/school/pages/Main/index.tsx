import { useEffect } from 'react';
import { useSchoolCoreContext } from '@school/context/core';
import { useSchoolEventManager } from '@school/manager/EventManager';

export default function SchoolMain() {
  const { state } = useSchoolCoreContext();
  const { generateEvent, handleChoice } = useSchoolEventManager();

  useEffect(() => {
    generateEvent('開始遊戲');
  }, [generateEvent]);

  return (
    <div>
      <h1>{state.event?.eventDescription || '載入中...'}</h1>
      <div>
        {state.event?.choices.map((option, index) => (
          <button key={index} onClick={() => handleChoice(option)}>
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}
