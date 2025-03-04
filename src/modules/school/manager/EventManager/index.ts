import type { Choice } from '@services/ApiService/types';
import { useSchoolCoreContext } from '@school/context/core';
import { schoolEventService } from '@school/services/EventService';

export function useSchoolEventManager() {
  const { state, dispatch } = useSchoolCoreContext();

  const generateEvent = async (choice: string) => {
    try {
      const response = await schoolEventService.generateEvent(state.character, choice);
      dispatch({
        type: 'SET_EVENT',
        payload: {
          eventDescription: response.eventDescription,
          choices: response.choices,
        },
      });
    } catch (error) {
      // MOCK DATA
      dispatch({
        type: 'SET_EVENT',
        payload: {
          eventDescription: '你的學校籃球隊正在招新，你很想加入，但也擔心會影響學業和其他興趣。',
          choices: [
            {
              text: '立刻報名加入籃球隊',
              updatedAttributes: { academics: -5 },
              resultDescription: '你成功加入了籃球隊，並在訓練中結識了很多新朋友，但學業有些下滑。',
            },
            {
              text: '放棄加入，專心學業',
              updatedAttributes: { academics: 10 },
              resultDescription: '你選擇專心學業，學業成績有所提升，但沒有新的社交活動。',
            },
            {
              text: '放棄加入，有更多時間閱讀和玩遊戲',
              updatedAttributes: { academics: 0 },
              resultDescription: '你有更多的時間進行你喜歡的活動，身心都輕鬆了許多。',
            },
            {
              text: '和教練討論，嘗試兼顧學業和籃球',
              updatedAttributes: { academics: 5 },
              resultDescription: '你和教練達成共識，學業和籃球都得以兼顧，並結識了新的朋友。',
            },
          ],
        },
      });
      console.error('Error generating event:', error);
    }
  };

  const handleChoice = async (selectedChoice: Choice) => {
    dispatch({
      type: 'SET_CHARACTER',
      payload: selectedChoice.updatedAttributes,
    });

    await generateEvent(selectedChoice.text);
  };

  return { generateEvent, handleChoice };
}
