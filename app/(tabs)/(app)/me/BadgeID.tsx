import React from 'react';
import {
  VStack,
  Text,
  Image,
  Button,
  View,
  ButtonText,
} from "@gluestack-ui/themed";

// interface BadgeProps {
//   badge_name: string;
//   image_src: string;
//   id: string;
//   content: string;
// }

// const BadgeID: React.FC<BadgeProps> = ({ badge_name, image_src, id, content }) => {
  const BadgeID = () => {
  return (
    <View bg="$white" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={{ uri: '../assets/combadge.png' }}
        style={{ width: 100, height: 100 }}
      />
      <Text color="$primary7" style={{ fontSize: 24, fontWeight: 'bold' }}>Communicate Badge</Text>
      <Text color="$primary7" style={{ fontSize: 16 }}>เหรียญตราการสื่อสาร</Text>
      <Text color="$primary9" style={{ margin: 20, fontSize: 16 }}>เหรียญตรานี้สื่อว่าคุณได้ผ่านกิจกรรมที่เกี่ยวข้องกับการสื่อสารสําเร็จ การสื่อสารนั้นเป็นสิ่งสำคัญเป็นอย่างมาก ไม่ว่าจะทําหรือเริ่มต้นสิ่งใด ถ้าหากขาดการสื่อสารที่ดี งานอาจจะไม่ราบลื่นได้ เราทุกคนควรตระหนักถึงความสำคัญทางการสื่อสารนี้</Text>
      <Button bg="$primary4" style={{ margin: 100, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <ButtonText style={{ fontSize: 16 }}>หากิจกรรมที่เกี่ยวข้อง</ButtonText>
      </Button>
    </View>
  );
};

export default BadgeID;
