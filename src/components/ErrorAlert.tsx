import { Alert } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";

export const ErrorAlert = (props: ErrorAlert) => {
    return (
        <Alert
            icon={<IconAlertCircle size="1rem" />}
            title="Error"
            color="red"
            radius="lg"
            withCloseButton
            variant="filled"
            mb={15}
            onClose={() => props.setErrorData({})}
        >
            {props.message}
        </Alert>
    )
}
