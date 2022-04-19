

export async function Loginverify({ username, password, users}) {

  /* Receiving data from loginM and verify */
  
  return new Promise((resolve, reject) => {
   
    const hasDraft = obj => obj.username === username && obj.password === password;
    
        if (users.some(hasDraft)) {
          resolve();
        } else {
          reject();
        }
     
  });
}


