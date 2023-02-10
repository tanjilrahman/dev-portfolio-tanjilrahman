export default {
  name: "certificate",
  title: "Certificate",
  type: "document",
  orderings: [
    {
      title: "Manual order",
      name: "manualOrder",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "certificateImage",
      title: "CertificateImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "organization",
      title: "Issuing organization",
      type: "string",
    },
    {
      name: "issueDate",
      title: "Issue date",
      type: "date",
    },
    {
      name: "credentialURL",
      title: "Credential URL",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
};
