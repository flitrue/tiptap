import { setBlockType } from 'tiptap-commands'
import Node from '../utils/node'

export default class ParagraphNode extends Node {

	get name() {
		return 'paragraph'
	}

	get schema() {
		return {
			content: 'inline*',
			group: 'block',
			draggable: false,
			parseDOM: [{
				tag: 'p',
			}],
			toDOM: () => ['p', 0],
		}
	}

	command({ type }) {
		return setBlockType(type)
	}

}
