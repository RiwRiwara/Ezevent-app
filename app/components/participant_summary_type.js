import { config } from "@gluestack-ui/config";
import {
    HStack,
    Image,
    Text,
    ButtonGroup,
    Button,
    Box,
    GluestackUIProvider,
} from "@gluestack-ui/themed";
import { COLORS } from "../../config/color";
import React from "react";

import CustomBox from "../components/CustomBox"

import Education from "../../assets/participants/Education.jpg"
import Entertainment from "../../assets/participants/Entertainment.jpg"
import Charity from "../../assets/participants/Charity.jpg"
import Seminar from "../../assets/participants/Seminar.jpg"
import Finance from "../../assets/participants/Finance.jpg"
import Game from "../../assets/participants/Game.jpg"

import Funny from "../../assets/participants/Funny.jpeg"
import Exhibition from "../../assets/participants/Exhibition.jpg"
import Art from "../../assets/participants/Art.jpg"
import Technology from "../../assets/participants/Technology.jpg"
import Other from "../../assets/participants/other.jpg"


import { useTranslation } from "react-i18next";

function participant_summary_type() {
    const { t } = useTranslation();


    return (
        <GluestackUIProvider config={config}>
            <div style={{ width: "100%", overflowX: "auto" }}>
                <HStack
                    space="md"
                    reversed={false}
                    style={{ whiteSpace: "nowrap" }}
                >
                    <ButtonGroup>
                        <CustomBox
                            color={COLORS.neutral7}
                            text={t('participant_summary1')}
                            num="11"
                            imageUri={Education}
                        />
                        <CustomBox
                            color={COLORS.danger5}
                            text={t('participant_summary2')}
                            num="5"
                            imageUri={Entertainment}
                        />
                        <CustomBox
                            color={COLORS.success7}
                            text={t('participant_summary3')}
                            num="6"
                            imageUri={Charity}
                        />
                        <CustomBox
                            color={COLORS.danger4}
                            text={t('participant_summary4')}
                            num="7"
                            imageUri={Seminar}
                        />
                        <CustomBox
                            color={COLORS.secondary6}
                            text={t('participant_summary5')}
                            num="3"
                            imageUri={Finance}
                        />
                        <CustomBox
                            color={COLORS.success8}
                            text={t('participant_summary6')}
                            num="5"
                            imageUri={Game}
                        />
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
                            color={COLORS.warning4}
                            text={t('participant_summary7')}
                            num="5"
                            imageUri={Funny}
                        />
                        <CustomBox
                            color={COLORS.neutral6}
                            text={t('participant_summary8')}
                            num="8"
                            imageUri={Exhibition}
                        />
                        <CustomBox
                            color={COLORS.danger2}
                            text={t('participant_summary9')}
                            num="4"
                            imageUri={Art}
                        />
                        <CustomBox
                            color={COLORS.secondary7}
                            text={t('participant_summary10')}
                            num="1"
                            imageUri={Technology}
                        />
                        <CustomBox
                            color={COLORS.gray4}
                            text={t('participant_summary11')}
                            num="0"
                            imageUri={Other}
                        />
                    </ButtonGroup>
                </HStack>
            </div>
        </GluestackUIProvider>
    );
}

export default participant_summary_type;
