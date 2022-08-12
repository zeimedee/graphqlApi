const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const mongoose = require('mongoose')
const app = express()

const GraphQlSchema = require('./schema/index')
const GraphQlResolvers = require('./resolver/index')

app.use('/graphql', graphqlHTTP({
    schema:GraphQlSchema,
    rootValue:GraphQlResolvers,
    graphiql:true
}))


const uri = 'mongodb+srv://admin:mongoadmin12@cluster0.witgr.mongodb.net/test1?retryWrites=true&w=majority'
const options = {
    useNewUrlParser:true,
    useUnifiedTopology: true
}

mongoose.connect(uri,options)
        .then(()=>{
            app.listen(4001, ()=>{
                console.log('graphql api is running on localhost port 4001')
                })
        }).catch((err)=>{
            throw err
        })

