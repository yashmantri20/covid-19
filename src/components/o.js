function Home(props) {
    const [active, setactive] = useState(0);
    const [newcase,setcase] = useState(0);
    const [newrecovered,setrecover] = useState(0);
    const [newdeath,setdeath] = useState(0);
    const [total,settotal] = useState(0);
    const [deaths,setdeaths] = useState(0);
    const [recovered,setrecovered] = useState(0);
    const [lastUpdated, setLastUpdated] = useState('');
    const [fetched, setFetched] = useState(false);
   
  
    useEffect(() => {
      if (fetched === false) {
        getStates();
      }
    }, [fetched]);
    
    const getStates = async () => {
      try {
        const [response] = await Promise.all([
          axios.get('https://api.covid19india.org/data.json'),
          axios.get('https://api.covid19india.org/state_district_wise.json'),
          /* axios.get('https://api.covid19india.org/raw_data.json'),*/
        ]);
        setactive(response.data.statewise[0].active);
        setcase(response.data.key_values[0].confirmeddelta)
        setrecover(response.data.key_values[0].recovereddelta)
        setdeath(response.data.key_values[0].deceaseddelta)
        settotal(response.data.statewise[0].confirmed);
        setdeaths(response.data.statewise[0].deaths);
        setrecovered(response.data.statewise[0].recovered);
        setLastUpdated(response.data.statewise[0].lastupdatedtime);
        setFetched(true);
        
      } catch (err) {
        console.log(err);
      }
    };
  
  