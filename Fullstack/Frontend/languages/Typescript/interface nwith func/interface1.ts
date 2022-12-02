// function marriage()
// {
//     console.log('i am here')
// }
// marriage()

function marriage(props:Imarriage)
{
    console.log(props)
}
marriage({gift1:'watch',gift2:100})
marriage({gift1:'watch'})

interface Imarriage
{
    gift1:String,
    gift2?:number
}