  export interface Thankus {
    mensagem: string,
    nomeUtil: string, //firebase display name ouuu nome que a pessoa quiser na hora de publicar
    deUtil: string, //firebase email
    userNo?: number | string, //usando para o uid do firebase
    paraUtil: string, //nome de exibicao
    paraUserNo?: number, //no caso de fazer implementacao
    tipo: string, //cool but pro, make an impact..
    phc: boolean, //se trabalha na phc
    dataPost: Date,
    edHitech: number,
    likes?: number
}
