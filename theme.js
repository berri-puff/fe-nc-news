import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
 colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    orange: {
        200: '#FBD38D',
        300: '#F6AD55'
    },
    purple: {
        100: '#E9D8FD',
        200: '#D6BCFA',
        300: '#B794F4',
        700: '#553C9A'
    },
    pink: {
        50: '#FFF5F7',
        700: '#97266D'
    },
    teal: {
        600: '#2C7A7B'
    }
 }
})

export default theme