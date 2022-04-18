

export async function Loginverify({ username, password, users}) {

  
  return new Promise((resolve, reject) => {
   
    const hasDraft = obj => obj.username === username && obj.password === password;
    
        if (users.some(hasDraft)) {
          resolve();
        } else {
          reject();
        }
     
  });
}


