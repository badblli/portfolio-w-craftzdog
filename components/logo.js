import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import FootprintIcon from './icons/footprint'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 1000ms ease;
  }

  &:hover > svg {
    transform: rotate(720deg);
  }
`

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <FootprintIcon />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            ./badblli
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
