import {FC, ChangeEvent} from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerContent,
    useDisclosure,
    Button,
    DrawerOverlay,
    Input,
    Stack
} from '@chakra-ui/react';

const PDFUpload: FC<{
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    onUploadClick: () => Promise<void>
}> = ({onChange, onUploadClick}) => {
    const {isOpen, onOpen, onClose} = useDisclosure()

    return (
        <>
            <Button position='absolute' top='0' right='0' onClick={onOpen}>CSV Upload &gt;&gt;</Button>
            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Settings</DrawerHeader>
                    <DrawerBody>
                        <Stack direction='column' spacing={4}>
                            <p><b>Upload CSV</b></p>
                            <Input
                                onChange={onChange}
                                p='1'
                                type='file'
                            />
                            <Button
                                onClick={onUploadClick}
                            >Upload</Button>
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default PDFUpload;
