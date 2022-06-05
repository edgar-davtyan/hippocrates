const ContactMap = () => {
  const iframe = `<iframe src="https://snazzymaps.com/embed/382438" width="550px" height="705px" style="border:none;"></iframe>`;
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: iframe,
      }}
    />
  );
};

export default ContactMap;
