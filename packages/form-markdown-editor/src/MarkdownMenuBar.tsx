import {
  ButtonGroup,
  IconButton,
  type ButtonGroupProps,
} from '@chakra-ui/button'
import { Box, Divider, Flex } from '@chakra-ui/layout'
import { Editor } from '@tiptap/react'
import React from 'react'
import {
  RiArrowGoBackLine,
  RiArrowGoForwardLine,
  RiBold,
  RiCodeSSlashLine,
  RiDoubleQuotesL,
  RiHeading,
  RiItalic,
  RiListOrdered,
  RiListUnordered,
  RiSeparator,
  RiStrikethrough,
} from 'react-icons/ri'

export const MarkdownMenuBar = ({
  editor,
  buttonProps,
}: {
  editor: Editor | null
  buttonProps?: ButtonGroupProps
}) => {
  if (!editor) return null

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      w="full"
      bg="gray.100"
      p="2"
      roundedBottom="lg"
    >
      <ButtonGroup size="sm" variant="outline" {...buttonProps}>
        <IconButton
          bg="white"
          aria-label="Bold"
          icon={<RiBold />}
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive('bold')}
        />
        <IconButton
          bg="white"
          aria-label="Italic"
          icon={<RiItalic />}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive('italic')}
        />
        <IconButton
          bg="white"
          aria-label="Strikethrough"
          icon={<RiStrikethrough />}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          isActive={editor.isActive('strike')}
        />
        <IconButton
          bg="white"
          aria-label="Inline Code"
          icon={<RiCodeSSlashLine />}
          onClick={() => editor.chain().focus().toggleCode().run()}
          isActive={editor.isActive('code')}
        />
        <BarDivider />

        <IconButton
          bg="white"
          aria-label="Heading"
          icon={<RiHeading />}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          isActive={editor.isActive('heading', { level: 2 })}
        />
        <IconButton
          bg="white"
          aria-label="Unordered List"
          icon={<RiListUnordered />}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive('bulletList')}
        />
        <IconButton
          bg="white"
          aria-label="Ordered List"
          icon={<RiListOrdered />}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive('orderedList')}
        />
        <BarDivider />

        <IconButton
          bg="white"
          aria-label="Blockquote"
          icon={<RiDoubleQuotesL />}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          isActive={editor.isActive('blockquote')}
        />
        <IconButton
          bg="white"
          aria-label="Divider"
          icon={<RiSeparator />}
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        />
        <BarDivider />

        <IconButton
          bg="white"
          aria-label="Undo"
          icon={<RiArrowGoBackLine />}
          onClick={() => editor.chain().focus().undo().run()}
        />
        <IconButton
          bg="white"
          aria-label="Redo"
          icon={<RiArrowGoForwardLine />}
          onClick={() => editor.chain().focus().redo().run()}
        />
      </ButtonGroup>
    </Flex>
  )
}

const BarDivider = () => (
  <Box py="1">
    <Divider orientation="vertical" color="white" />
  </Box>
)
