import { useState, useEffect, useRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import {
  ClassicEditor,
  AccessibilityHelp,
  Alignment,
  Autoformat,
  AutoImage,
  AutoLink,
  Autosave,
  BalloonToolbar,
  BlockQuote,
  Bold,
  Code,
  CodeBlock,
  Essentials,
  FindAndReplace,
  Heading,
  Highlight,
  HorizontalLine,
  HtmlEmbed,
  ImageBlock,
  ImageCaption,
  ImageInline,
  ImageInsert,
  ImageInsertViaUrl,
  ImageResize,
  ImageStyle,
  ImageTextAlternative,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  Italic,
  Link,
  LinkImage,
  List,
  ListProperties,
  Markdown,
  MediaEmbed,
  Paragraph,
  PasteFromMarkdownExperimental,
  PasteFromOffice,
  RemoveFormat,
  SelectAll,
  SimpleUploadAdapter,
  SpecialCharacters,
  SpecialCharactersArrows,
  SpecialCharactersCurrency,
  SpecialCharactersEssentials,
  SpecialCharactersLatin,
  SpecialCharactersMathematical,
  SpecialCharactersText,
  Strikethrough,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  TextTransformation,
  TodoList,
  Underline,
  Undo,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";
import { Button } from "@nextui-org/react";

export default function Editor() {
  const editorContainerRef = useRef(null);
  const editorRef = useRef<CKEditor<ClassicEditor>>(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);

  useEffect(() => {
    setIsLayoutReady(true);

    return () => setIsLayoutReady(false);
  }, []);

  return (
    <div className="main-container">
      <div
        className="editor-container editor-container_classic-editor"
        ref={editorContainerRef}
      >
        <div className="editor-container__editor">
          <div>
            {isLayoutReady && (
              <CKEditor
                editor={ClassicEditor}
                config={{
                  toolbar: {
                    items: [
                      "undo",
                      "redo",
                      "|",
                      "heading",
                      "|",
                      "bold",
                      "italic",
                      "underline",
                      "|",
                      "link",
                      "insertImage",
                      "insertTable",
                      "highlight",
                      "blockQuote",
                      "codeBlock",
                      "|",
                      "alignment",
                      "|",
                      "bulletedList",
                      "numberedList",
                      "todoList",
                      "indent",
                      "outdent",
                    ],
                    shouldNotGroupWhenFull: false,
                  },
                  plugins: [
                    AccessibilityHelp,
                    Alignment,
                    Autoformat,
                    AutoImage,
                    AutoLink,
                    Autosave,
                    BalloonToolbar,
                    BlockQuote,
                    Bold,
                    Code,
                    CodeBlock,
                    Essentials,
                    FindAndReplace,
                    Heading,
                    Highlight,
                    HorizontalLine,
                    HtmlEmbed,
                    ImageBlock,
                    ImageCaption,
                    ImageInline,
                    ImageInsert,
                    ImageInsertViaUrl,
                    ImageResize,
                    ImageStyle,
                    ImageTextAlternative,
                    ImageToolbar,
                    ImageUpload,
                    Indent,
                    IndentBlock,
                    Italic,
                    Link,
                    LinkImage,
                    List,
                    ListProperties,
                    Markdown,
                    MediaEmbed,
                    Paragraph,
                    PasteFromMarkdownExperimental,
                    PasteFromOffice,
                    RemoveFormat,
                    SelectAll,
                    SimpleUploadAdapter,
                    SpecialCharacters,
                    SpecialCharactersArrows,
                    SpecialCharactersCurrency,
                    SpecialCharactersEssentials,
                    SpecialCharactersLatin,
                    SpecialCharactersMathematical,
                    SpecialCharactersText,
                    Strikethrough,
                    Table,
                    TableCaption,
                    TableCellProperties,
                    TableColumnResize,
                    TableProperties,
                    TableToolbar,
                    TextTransformation,
                    TodoList,
                    Underline,
                    Undo,
                  ],
                  balloonToolbar: [
                    "bold",
                    "italic",
                    "|",
                    "link",
                    "insertImage",
                    "|",
                    "bulletedList",
                    "numberedList",
                  ],
                  heading: {
                    options: [
                      {
                        model: "paragraph",
                        title: "Paragraph",
                        class: "ck-heading_paragraph",
                      },
                      {
                        model: "heading1",
                        view: "h1",
                        title: "Heading 1",
                        class: "ck-heading_heading1",
                      },
                      {
                        model: "heading2",
                        view: "h2",
                        title: "Heading 2",
                        class: "ck-heading_heading2",
                      },
                      {
                        model: "heading3",
                        view: "h3",
                        title: "Heading 3",
                        class: "ck-heading_heading3",
                      },
                      {
                        model: "heading4",
                        view: "h4",
                        title: "Heading 4",
                        class: "ck-heading_heading4",
                      },
                      {
                        model: "heading5",
                        view: "h5",
                        title: "Heading 5",
                        class: "ck-heading_heading5",
                      },
                      {
                        model: "heading6",
                        view: "h6",
                        title: "Heading 6",
                        class: "ck-heading_heading6",
                      },
                    ],
                  },
                  image: {
                    toolbar: [
                      "toggleImageCaption",
                      "imageTextAlternative",
                      "|",
                      "imageStyle:inline",
                      "imageStyle:wrapText",
                      "imageStyle:breakText",
                      "|",
                      "resizeImage",
                    ],
                  },
                  initialData: "",
                  link: {
                    addTargetToExternalLinks: true,
                    defaultProtocol: "https://",
                    decorators: {
                      toggleDownloadable: {
                        mode: "manual",
                        label: "Downloadable",
                        attributes: {
                          download: "file",
                        },
                      },
                    },
                  },
                  list: {
                    properties: {
                      styles: true,
                      startIndex: true,
                      reversed: true,
                    },
                  },
                  menuBar: {
                    isVisible: true,
                  },
                  placeholder: "Type or paste your content here!",
                  table: {
                    contentToolbar: [
                      "tableColumn",
                      "tableRow",
                      "mergeTableCells",
                      "tableProperties",
                      "tableCellProperties",
                    ],
                  },
                  simpleUpload: {
                    // The URL that the images are uploaded to.
                    uploadUrl: "https://example.com/upload",
                  },
                }}
                ref={editorRef}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
