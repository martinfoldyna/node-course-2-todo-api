const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('connected to MongoDB server');
    var db = client.db('TodoApp')
    
    //deleteMany
    //    db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //    console.log(result);
    //    });
    
    
    //findOne
//    db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//       console.log(result.result); 
//    });
//    
//    //findOneAndDelete
//    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//        console.log(result);
//    })
//    
    db.collection('Users').deleteMany({name: 'Martin'});
    
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5b00774da8eb6f5e773d71fe')
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    })
    
//    client.close()
})