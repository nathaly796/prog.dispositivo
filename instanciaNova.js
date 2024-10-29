// um factory retornaa um novo valor
module.exports=()=>{
    return{
        valor:1,
        inc(){
            this.valor++
        }
    }
}