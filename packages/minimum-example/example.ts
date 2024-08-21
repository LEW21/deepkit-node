import { serializeType, typeOf } from '@deepkit/type'

interface User {
    username: string
}

console.log(serializeType(typeOf<User>()))
