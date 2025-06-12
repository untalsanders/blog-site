let environment

switch (import.meta.env.MODE) {
    case 'production':
        environment = import('./environment.prod')
        break
    default:
        environment = import('./environment.dev')
        break
}

export default (await environment).default