export default () => ({
  documentation: {
    enabled: true,
  },
  
  tinymce: {
    enabled: true,
    config: {
      editor: {
        outputFormat: "html",
        images_upload_url: 'http://localhost:1337/api/upload',
        tinymceSrc: "https://cdn.tiny.cloud/1/p74m8jix89aq62nuycca0bld8j9zose5mblio2kqlxrktuaf/tinymce/7/tinymce.min.js",
        editorConfig: {
          language: "en",
          height: 500,
          menubar: false,
          extended_valid_elements: "span, img, small",
          forced_root_block: "",
          convert_urls: false,
          entity_encoding: "raw",
          plugins:
            "image advlist autolink lists link  charmap preview anchor \
                    searchreplace visualblocks code fullscreen table emoticons nonbreaking \
                    insertdatetime media table code help wordcount",
          toolbar:
            "image undo redo | styles | bold italic forecolor backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    media table emoticons visualblocks code|\
                    nonbreaking bullist numlist outdent indent | removeformat | help",
          style_formats: [
            {
              title: "Headings",
              items: [
                { title: "h1", block: "h1" },
                { title: "h2", block: "h2" },
                { title: "h3", block: "h3" },
                { title: "h4", block: "h4" },
                { title: "h5", block: "h5" },
                { title: "h6", block: "h6" },
              ],
            },

            {
              title: "Text",
              items: [
                { title: "Paragraph", block: "p" },
                {
                  title: "Paragraph with small letters",
                  block: "small",
                },
              ],
            },
          ],
        },
      },
    },
  },
});
