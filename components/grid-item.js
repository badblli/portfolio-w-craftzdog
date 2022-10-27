import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ title, description, url, source }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={url}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={source} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{description}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ title, description, url, id }) => (
  <Box w="100%" textAlign="center" className='item'>
    <NextLink href={`/works/${id}`} passHref scroll={false}>
      {/* id yerine slug ekle */}
      <LinkBox cursor="pointer">
        <Image
          src={url}
          alt={title}
          className="grid-item-thumbnail"
          width={300}
          height={180}
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{description}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
      .item {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        -moz-transform: scale(1);
        transition: all 0.3s ease-in;
        -moz-transition: all 0.3s ease-in;
        -webkit-transition: all 0.3s ease-in;
        -ms-transition: all 0.2s ease-in;
      }
      .item:hover {
        -webkit-transform: scale(1.07);
        -ms-transform: scale(1.07);
        -moz-transform: scale(1.07);
        transform: scale(1.07);
        border: 1px solid #000;
      }
    `}
  />
)
