import { Alert, AlertDescription, AlertIcon, AlertTitle, CloseButton } from "@chakra-ui/react"

interface Props {
    status: 'error' | 'success' | 'warning',
    title: String,
    description: String
}

export const CustomAlertComponent: React.FC<Props> = (props) => {

    return (
        <Alert status={props.status}>
            <AlertIcon />
            <AlertTitle mr={2}>{props.title}</AlertTitle>
            <AlertDescription>{props.description}</AlertDescription>
            <CloseButton position='absolute' right='8px' top='8px' />
        </Alert>)

}
