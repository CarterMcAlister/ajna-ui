import { Box, type BoxProps } from '@chakra-ui/react'
import { css } from '@emotion/react'
import { EditorContent, PureEditorContent, useEditor, type Extensions } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { forwardRef, useEffect } from 'react'

export interface TiptapEditorProps
  extends Omit<BoxProps, 'onChange' | 'value'> {
  onChange: (json: string) => void
  extensions?: Extensions
  value?: string
  children?: React.ReactNode
}

export const TiptapEditor = forwardRef<PureEditorContent, TiptapEditorProps>(
  ({ onChange, value, children,extensions,  ...props }, ref) => {
    const editor = useEditor({
      extensions: extensions ?? [StarterKit],
      content: value || '',
      onUpdate: ({ editor }) => {
        const html = editor.getHTML()
        onChange(html)
      },
    })

    // clear editor when form is cleared
    useEffect(() => {
      if (!value && editor) {
        editor.commands.clearContent(true)
      }
    }, [value])

    const childrenWithProps = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { editor })
      }
      return child
    })

    return (
      <Box
        rounded="lg"
        border="1px solid"
        borderColor="gray.100"
        overflow="hidden"
        css={editorStyles}
        {...props}
      >
        <EditorContent editor={editor} ref={ref} />
        {childrenWithProps}
      </Box>
    )
  }
)

export const contentStyles = css`
  color: var(--chakra-colors-gray-700);
  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
    font-size: var(--chakra-fontSizes-lg);
  }

  code {
    background-color: var(--chakra-colors-gray-100);
    color: #616161;
  }

  a {
    color: var(--chakra-colors-blue-500);
    cursor: pointer;
  }

  pre {
    background: #0d0d0d;
    color: #fff;
    font-family: monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;

    &.ProseMirror-selectednode {
      outline: 3px solid #68cef8;
    }
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid;
    border-color: var(--chakra-colors-gray-100);
  }

  hr {
    border: none;
    border-top: 2px solid;
    border-color: var(--chakra-colors-gray-100);
    margin: 2rem 0;
  }

  .mention {
    color: var(--chakra-colors-gray-500);
  }
`

const editorStyles = css`
  .ProseMirror {
    border: none;
    outline: none;
    min-height: var(--chakra-space-14);
    background: white;
    padding: 0.5em;

    p.is-editor-empty:first-child::before {
      content: attr(data-placeholder);
      float: left;
      color: #adb5bd;
      pointer-events: none;
      height: 0;
    }

    placeholder {
      display: block;
      border: 1px solid #ccc;
      width: 100%;
      background-color: var(--chakra-colors-gray-100);
      display: flex;
      align-items: center;
      padding: 0.5em;
      height: auto;
      padding-left: 1em;
      border-radius: 1em;
      margin-bottom: 1em;
      z-index: 1;

      .loader {
        border: 4px solid #f3f3f3; /* Light grey */
        border-top: 4px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 30px;
        height: 30px;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      .loader-text {
        color: var(--chakra-colors-gray-500);
        padding-left: var(--chakra-space-4);
      }
    }

    ${contentStyles}
  }
`
