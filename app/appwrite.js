import { Client, ID , Databases ,  Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('668f85c0002441e868f1');
    
    
    const databases = new Databases(client);
    const promise = databases.createDocument(
        '668f8ab8000903ee6236',
        '668f8ac70000ec69243c',
        ID.unique(),
        {Title : "I am title",
         desc : "i am desc"
        }
    );
    
    promise.then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
export const account = new Account(client);
export { ID } from 'appwrite';