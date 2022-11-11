const intersect = (n1, n2) =>
  n1.reduce((a, c) => {
    if (n2.includes(c)) {
      a = [...a, c];
      n2.splice(n2.indexOf(c), 1);
    }
    return a;
  }, []);


  //one line: 
  intersect=(n1, n2)=>n1.reduce((a, c) => {if (n2.includes(c)) {a = [...a, c];n2.splice(n2.indexOf(c), 1);}return a;}, []);