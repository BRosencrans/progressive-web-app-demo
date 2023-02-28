import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });
//Method to add data to thed atabase
  export const putDb = async (content)  => {

    const jateDb = await openDB('jate', 1);
  
    const newTransaction = jateDb.transaction('jate', 'readwrite');
  
    const storeObj = newTransaction.objectStore('jate');
  
    const addData = storeObj.put({ id: 1, value: content });

    const newData = await addData;
    console.log("Saved to the database successfully", newData);
  };
  // Method that gets all the content from the database
  export const getDb = async () => {
  
    const jateDb = await openDB('jate', 1);
  
    const newTransaction= jateDb.transaction('jate', 'readonly');
  
    const storeObj = newTransaction.objectStore('jate');
  
    const allData = storeObj.getAll();
  
    const showData = await allData;
    console.log('result.value', showData);
    return showData?.value;
  };
  
initdb();
