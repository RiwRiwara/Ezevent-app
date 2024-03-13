import { config } from "@gluestack-ui/config";
import {
    HStack,
    Image,
    Text,
    ButtonGroup,
    Button,
    GluestackUIProvider,
} from "@gluestack-ui/themed";
import { COLORS } from "../../config/color";
import React from "react";
import Welfare from "../../assets/oraganizer/Welfare.jpg"
import Registration from "../../assets/oraganizer/Registration.jpg"
import Coordinator from "../../assets/oraganizer/Coordinator.jpg"
import Safety from "../../assets/oraganizer/Safety.jpg"
import Designer from "../../assets/oraganizer/Designer.jpg"
import Creative from "../../assets/oraganizer/Creative.jpg"

import Location from "../../assets/oraganizer/Location.jpeg"
import Account_Executive from "../../assets/oraganizer/account-executive.jpg"
import Script_Writer from "../../assets/oraganizer/Script Writer.jpg"
import Stage from "../../assets/oraganizer/Stage.jpg"
import Other from "../../assets/oraganizer/orther.jpg"


import { useTranslation } from "react-i18next";

import CustomBox from "../components/CustomBox"

function organizer_summary_type() {
    const { t } = useTranslation();

    return (
        <GluestackUIProvider config={config}>
            <div style={{ width: "100%", overflowX: "auto" }}>
                <HStack
                    space="md"
                    reversed={false}
                    style={{ whiteSpace: "nowrap" }}
                >
                    {/* <Image source={Welfare}/> */}
                    <ButtonGroup>
                        <CustomBox
                            color={COLORS.success7}
                            text={t('organize_summary1')}
                            num="11"
                            imageUri={Welfare}
                        />
                        <CustomBox
                            color={COLORS.primary3}
                            text={t('organize_summary2')}
                            num="5"
                            imageUri={Registration}

                        />
                        <CustomBox
                            color={COLORS.danger4}
                            text={t('organize_summary3')}
                            num="6"
                            imageUri={Coordinator} />
                        <CustomBox
                            color={COLORS.gray3}
                            text={t('organize_summary4')}
                            num="7"
                            imageUri={Safety} />
                        <CustomBox
                            color={COLORS.primary5}
                            text={t('organize_summary5')}
                            num="3"
                            imageUri={Creative} />
                        <CustomBox
                            color={COLORS.neutral7}
                            text={t('organize_summary6')}
                            num="5"
                            imageUri={Designer} />
                    </ButtonGroup>
                </HStack>
                <HStack
                    space="md"
                    mt="10px"
                    reversed={false}
                    style={{ whiteSpace: "nowrap" }}
                >
                    <ButtonGroup>
                        <CustomBox
                            color={COLORS.neutral9}
                            text={t('organize_summary7')}
                            num="5"
                            imageUri={Location} />
                        <CustomBox
                            color={COLORS.secondary6}
                            text={t('organize_summary8')}
                            num="8"
                            imageUri={Account_Executive} />
                        <CustomBox
                            color={COLORS.danger2}
                            text={t('organize_summary9')}
                            num="4"
                            imageUri={Script_Writer} />
                        <CustomBox
                            color={COLORS.neutral6}
                            text={t('organize_summary10')}
                            num="1"
                            imageUri={Stage} />
                        <CustomBox
                            color={COLORS.gray4}
                            text={t('organize_summary11')}
                            num="0"
                            imageUri={Other} />
                    </ButtonGroup>
                </HStack>
            </div>
        </GluestackUIProvider>
    );
}

export default organizer_summary_type;
