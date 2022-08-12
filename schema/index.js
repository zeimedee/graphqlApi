const { buildSchema } = require('graphql')


module.exports = buildSchema(`
    type Person{
        name: String!,
        age: Int!,
        hobby: String!

    }
    input PersonType{
        body: String!
    }
    type RootQuery{
        persons: [Person!]
        person(_id:String): Person!
    }
    type Mutation{
        createPerson(person:PersonType): Person,
        updatePerson(_id:String): Person,
        deletePerson(_id:String, body:String):String,
    }
    schema{
        query: RootQuery,
        mutation: Mutation
    }
`)