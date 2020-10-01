#! JavaScript/TypeScript Example

/// <reference types="./EntLib" />

// EntLib namespace automatically added by EntLib.d.ts

const { Extension, Block } = EntLib

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
