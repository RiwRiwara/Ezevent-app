import React from "react";
import { 
  Card, 
  Button, 
  HStack,
  VStack,
  Heading,
  Text,
  View,
  ButtonText,
 } from "@gluestack-ui/themed";
const inbox_detail = () => {

  return (
    <View>
      <Heading size="xl" p="$4" pb="$3" color="$neutral9">ปรับเปลี่ยนเวลาการจัดกิจกรรมด่วน</Heading>
      <Card>
        <HStack>
        <Text fontWeight='bold' color='$neutral9' mr='$3' size='sm'>
          เวลา:
        </Text>
        <Text color='$neutral9' size='sm'>
          17:30 น. วันที่ 25 ธันวาคม 2566
        </Text>
        </HStack>
        <HStack>
        <Text fontWeight='bold' color='$neutral9' mr='$3' size='sm'>
          กิจกรรม: 
        </Text>
        <Text color='$neutral9' size='sm'>
          Help the world by your hand
        </Text>
        </HStack>
        <HStack borderBottomWidth="$2" borderColor="$neutral9" mb='$3'>
        <Text fontWeight='bold' color='$neutral9' mr='$3' size='sm' mb='$3'>
          ถึง:
        </Text>
        <Text color='$neutral9' size='sm' mb='$3'>
          All staff
        </Text>
        </HStack>
        <Text fontWeight='bold' size='2xl' color='$neutral9' mb='$3'>
          ปรับเปลี่ยนเวลาการจัดกิจกรรมด่วน
        </Text>
        <Text color='$neutral9' size='md' mb='$96'>
          ปรับเปลี่ยนเวลาการจัดกิจกรรมด่วนเนื่องจากเกิดสภาพ
          แวดล้อมที่ย่ำแย่ ของสถานที่จัดกิจกรรม
          โดยทางผู้จัดจะทำการส่งข้อความแจ้งอีกที
          ขออภัยโดยอย่างยิ่ง
        </Text>
        <VStack>
        <Button mb='$3' bg='$neutral6'>
        <ButtonText color='$white' size='lg'>Contact</ButtonText>
          </Button>
        <HStack justifyContent='space-between'>
        <Button flex={1} mr='$3' bg='$warning5'>
        <ButtonText color='$white' size='lg'>Mark as Read</ButtonText>
          </Button>
        <Button bg='$danger5'>
        <ButtonText color='$white' size='lg'>Delete</ButtonText>
          </Button>
        </HStack>
        </VStack>
      </Card>
    </View>
  );
};

export default inbox_detail;
