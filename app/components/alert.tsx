import { 
    Alert,
    AlertIcon, 
    AlertText,
    VStack,
    HStack,
    CheckCircleIcon,
    Center,

} from '@gluestack-ui/themed';

interface AlertProps {
    sub: string;
    main: string;
    time: string;
  }

const Alerts: React.FC<AlertProps> = ({ sub, main, time }) => {
    return (
        <Alert action="success" variant="accent" backgroundColor='$white'>
            <HStack space='sm'>
            <Center>
            <AlertIcon as={CheckCircleIcon} size="xl"  mr="$3" />
            </Center>
            <VStack space='xs'>
                <AlertText color='$neutral9' size='xs'>
                    {main}
                </AlertText >
                <AlertText fontWeight ='$bold'>
                    {sub}
                </AlertText>
            </VStack>
            <Center>
            <AlertText>{time}</AlertText>
            </Center>
            </HStack>
        </Alert>
    );
};
export default Alerts;
