import { ApolloServer, gql, UserInputError } from 'apollo-server';


let products = [
    {
        name:'Producto 1',
        price:1520.25,
        shortDescription:'sklnsjldncsdljncldsnc',
        longDescription: 'skdnsjlnjdsc sidnfilds cdsinfiñsdl',
        data: 'dsjlfnlsdjnfklsdnf fsdkfksf skdfmdsñk',
        principalImages:{img:'clksdmcksd.png',id:'20210321'},
        images:[
            {img:'clksdmcks1.png',id:'20210321'},
            {img:'clksdmcks2.png',id:'20210322'},
            {img:'clksdmcks3.png',id:'20210323'}
        ],
        id:'20210301'
    }
]


const typeDefs = gql`

    type Users {
        id:ID
        email:String!
        name:String!
        password:String!
    }

    type Image {
        img:String!
        id:ID
    }

    type Details {
        longDescription:String!,
        shortDescription:String!
    }

    type Product {
        name:String!
        price:Float!
        shortDescription:String!
        longDescription:String!
        data:String
        principalImages:Image!
        images:[Image]
        id:ID
        details:Details
    }

    type Service {
        title:String!
        data:String
        id:ID
    }

    type Query {
        allProducts:[Product]
        allImages:[Image]
    }

    type Mutations {
        addProduct:Product
    }

`;


const resolvers = {
    Query:{
        allProducts : () => {
            return products
        },
        allImages : () => {

        }
    },
    Mutations:{
        addProduct : () => {

        }
    },
    Product:{
        details:(root) => {
            return {
                shortDescription: root.shortDescription,
                longDescription:  root.longDescription
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`);
})
