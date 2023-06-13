import { MemberForm } from "./MembershipForm";
type SnackbarProps = {
  message: string;
};
export const Snackbar: React.FC<SnackbarProps> = ({ message }) => (
  <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md">
    {message}
  </div>
);
type ModalProps = {
  closeModal: () => void;
  showSnackbar: (message: string) => void;
};
export const ModalPage: React.FC<ModalProps> = ({
  closeModal,
  showSnackbar,
}) => {
  const handleSuccess = () => {
    // alert("clicked!!");
    showSnackbar("Success! You have become a member.");
    closeModal(); // Close the modal when registration is successful
  };

  return (
    <div className="fixed bg-zinc-900/80 backdrop-blur-sm flex items-center justify-center w-full h-full inset-0 z-50 ">
      <div className="bg-white p-4 rounded-lg shadow-md w-1/2 min-h-[300px] flex flex-col">
        <h2 className="text-xl mb-4 text-center">Add Member Information</h2>
        <MemberForm onSuccess={handleSuccess} />
        {/* {isSnackbarVisible && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md">
            Success! You have become a member.
          </div>
        )} */}
        <button
          className="hover:bg-blue-500 bg-blue-700 text-white px-4 py-2 rounded-md mt-4"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};