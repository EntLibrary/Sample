#! JavaScript/TypeScript Example

/// <reference types="./EntLib" />

/*
    ES6 Import example
*/

import { Block, Extension } from 'EntLib'

const extension = new Extension({
    displayName: '확장블록',
    blocks: {
        logToConsole: new Block({
            template: '[콘솔에 (text: Hello world!) 출력하기]',
            action({ text }) {
                console.log(text)
            }
        })
    }
})

extension.enable()
Extension.allExtensionsLoaded()

/*
    Use automatically added namespace
*/

const extension = new EntLib.Extension({
    displayName: '확장블록',
    blocks: {
        logToConsole: new Block({
            template: '[콘솔에 (text: Hello world!) 출력하기]',
            action({ text }) {
                console.log(text)
            }
        })
    }
})

extension.enable()
Extension.allExtensionsLoaded()

// When Using Multiple Extensions

const extension1 = new Extension({
    displayName: '확장블록',
    blocks: {
        logToConsole: new Block({
            template: '[콘솔에 (text: Hello world!) 출력하기]',
            action({ text }) {
                console.log(text)
            }
        })
    }
})

const extension2 = new Extension({
    displayName: '확장블록2',
    blocks: {
        logToConsole2: new Block({
            template: '[콘솔에 (text: Hello world!) 출력하기]',
            action({ text }) {
                console.log(text)
            }
        })
    }
})

extension1.enable()
extension2.enable()

Extension.allExtensionsLoaded() // Must call this when all extensions enabled