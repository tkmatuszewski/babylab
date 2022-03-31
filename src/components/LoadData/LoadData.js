import React, {useState, useEffect} from 'react'
import { db } from '../Firebase/Firebase';
import { collection, query, onSnapshot, getDoc } from "firebase/firestore";
import Logo from '../Logo/Logo';
import { useData } from "../../contexts/DataContext";
import Dashboard from '../Dashboard/Dashboard';
import Search from '../Search/Search';

const LoadData=()=> {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    // const {updateData} = useData();

    useEffect(() => {
      const q = collection(db, "children");
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setLoading(true)
        const kids = [];
        snapshot.forEach((doc) => {
          const childId={id:doc.id}
          kids.push({...doc.data(),...childId});
        });
        setData(kids);
        // updateData(data)
        setLoading(false)
      });
      return unsubscribe;
    }, []);

    return (
      <>
        {loading ? (
          <div className="spinner">
            <Logo sizeVh={20} fontSize={10} />
            <p className="spinner__name">Pobieram...</p>
          </div>
        ) : (
          <Dashboard data={data}>
            <Search data={data}/>
          </Dashboard>
        )}
      </>
    );
};

export default LoadData