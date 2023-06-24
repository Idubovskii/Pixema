

const newPasswordValidationSchema = {
  password: {
    type: 'string',
    min: 8,
    max: 16,
    optional: true,
    nullable: true
  },
  confirmpassword: {
    type: 'equal',
    field: 'password',
    optional: true,
    nullable: true
  }
};

interface FormData {
  password: {
    value: string;
  };
  confirm_password: string;
}

export const NewPassword = () => {
 
  };

  return (
    <>
     
    </>
  );
};
