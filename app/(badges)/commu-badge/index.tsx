import {
    View,
  } from "@gluestack-ui/themed";
import Badge from "@components/badge";
import Star from "@components/star_icon";
import CustomModal from "@components/confirm_modal";
import Alerts from "@components/alert";

export default function test() {
  return (
    <View>
      <Badge badge_name="Community" image_src= "./assets/combadge.png" />
      <Badge badge_name="BrainStorm" image_src= "./assets/brainbadge.png" />
      <Badge badge_name="Social" image_src= "./assets/socialbadge.png" />
      <Star number_star={66} />

      <CustomModal
      buttonText="Show Modal 1"
      title="Confirm to exit Event now ?"
      />
      <CustomModal
        buttonText="Show Modal 2"
        title="Confirm to Cancel ?"
      />
      <CustomModal
        buttonText="Show Modal 3"
        title="Are you sure ?"
      />
      <Alerts
        sub="ปรับเปลี่ยนเวลาการจัดกิจกรรมด่วน"
        main="for staff / Help the world by your hand"
        time="5 min ago"
      />
    </View>
  );
}
