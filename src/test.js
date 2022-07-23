function addWords(wordData) {
    return async (dispatch) => {
      const docRef = await addDoc(collection(db, "mydic"), wordData);
      // const new_word = { id: docRef.id, ...wordData.data() };
      console.log("123123123현오현오");
      console.log("123123123현오현오");
      console.log("123123123현오현오");
      console.log("123123123현오현오");
      console.log("123123123현오현오");
      console.log("123123123현오현오");
      console.log("123123123현오현오");
      console.log("123123123현오현오");
      console.log("123123123현오현오");
      console.log("123123123현오현오");
      console.log("123123123현오현오");
      console.log("123123123현오현오");
      console.log("123123123현오현오");
      console.log("123123123현오현오");
      console.log("123123123현오현오");
      console.log("123123123현오현오");
      console.log("123123123현오현오");
      console.log("123123123현오현오");
      console.log("123123123현오현오");
      console.log("123123123현오현오");
      console.log("123123123현오현오");
      console.log("123123123현오현오");
      console.log("123123123현오현오");
      console.log("123123123현오현오");
      console.log("123123123현오현오");

      dispatch({ type: "WORD/ADD_WORD", payload: new_word });
    };
  }
  
  function editWords(wordData) {
    return async (dispatch) => {
      const docRef = await doc(db, "mydic", wordData.id);
      await updateDoc(docRef, wordData);
      // dispatch(wordActions.editWord(wordData));
    };
  }
  
  function doneWords(id,completed) {
    return async (dispatch) => {
      const docRef = await doc(db, "mydic", id);
      await updateDoc(docRef, completed?{completed:false}:{completed:true});
      dispatch(wordSliceActions.doneWord({id, completed}));
      console.log("갓현오!갓현오!갓현오!")
    };
  }
  
  function delWords(id) {
    return async (dispatch) => {
      const docRef = await doc(db, "mydic", id);
      await deleteDoc(docRef);
      // dispatch({ type: "WORD/DEL_WORD", payload: { id } });
      dispatch(wordSliceActions.delWord({id}));
    };
  }