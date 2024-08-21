import { createEsmHooks, register } from 'ts-node'
import { transformer, declarationTransformer } from '@deepkit/type-compiler'

export const { resolve, load } = createEsmHooks(register({
	transpileOnly: true,
	transformers: {
		before: [transformer],
		afterDeclarations: [declarationTransformer],
	}
}))
