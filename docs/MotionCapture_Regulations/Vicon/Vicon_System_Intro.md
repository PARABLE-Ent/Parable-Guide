---
sidebar_position: 1
---

# Vicon 시스템 설정

## 기본 설정
Vicon 시스템을 사용하기 위한 기본 설정입니다. <br/>
시스템을 연결하고 카메라 예열, 카메라 캘리브레이션 등의 과정이 진행됩니다.

### 시스템 전원 ON
<img src={require('./img/Vicon_1.png').default} width="100%" height="100%" alt="Vicon System Photo" />

해당 서버랙을 열고 멀티탭 스위치를 눌러 전원을 켜주세요. <br/>
1~2분 정도 소요되며 전체 시스템이 켜지면 카메라가 부팅됩니다.

### 소프트웨어 실행
**Vicon Shogun Live** 프로그램을 실행합니다. 현재 **1.13.1 버전**을 사용하고 있습니다. <br/>
카메라 전원이 모두 켜지면 좌측 시스템 패널에 카메라 실행 아이콘이 표기됩니다. <br/>

:::tip Camera warm-up
Vicon 카메라는 **예열 시간**이 필요합니다. 이를 **Warm-up**이라고 합니다. <br/>
시스템 전원을 킨 후 최소 30분, 최대 90분을 기다려주세요. <br/>

시간이 지난 후 카메라 온도가 **50~60℃** 에 도달하면 캘리브레이션을 진행할 수 있습니다. <br/>
카메라 선택 후 ![a](./img/btnAdvSettings.png) 아이콘을 클릭하면 카메라의 온도를 확인할 수 있습니다.
:::

## 카메라 캘리브레이션

### Camera Masking
Vicon 시스템은 적외선 카메라를 사용하여 반사를 촬영함으로써 움직임을 추적하고 생성합니다. <br/>
따라서 신체에는 **역반사 마커**인 **Retroreflective Marker**를 부착합니다. <br/>

그러나 벽, 바닥, 물체 등에서 발생하는 반사도 카메라에 의해 마커로 인식될 수 있습니다. <br/>
< 반사 잡힌 카메라 프리뷰 이미지 > <br/>

이러한 오류를 방지하기 위해 해당 부분이 마커로 인식되지 않도록 사전에 설정해야 합니다. <br/>
이를 **카메라 마스킹**이라고 합니다. <br/> <br/>





#### 반사 마스킹:

1. 캡처 볼륨에서 반사를 일으키는 장치나 장비를 모두 제거하거나 가려주세요.
2. **Mask All** 버튼을 눌러 마스킹을 진행합니다. <br/>
<img src={require('./img/StartMasking.png').default} width="60%" alt="Vicon System Photo" />
3. 약 5~10초 후에 **Stop**을 눌러 마스킹을 종료합니다.
4. Camera View에서 원치 않는 반사가 제거되었는지 확인합니다. *(빨간색 픽셀이 보이면 마스킹이 제대로 되지 않은 것입니다.)*





### Wand Calibration

마스킹이 완료되면 Active Wand 장비를 통해 **캡처 볼륨을 보정**할 수 있습니다.
1. **Wave All** 버튼을 눌러 캘리브레이션을 시작합니다.
<img src={require('./img/StartWave.png').default} width="60%" height="60%" alt="Start Wave" />
2. Wand 전원을 켜고 캡처 볼륨에 들어가 Wand를 X자로 움직여주세요. <br/>
<img src={require('./img/Wand_Switch.png').default} width="60%" height="60%" alt="Wand Power"/>
카메라는 Wand의 LED 데이터를 수집합니다. 충분한 데이터가 모인 카메라는 Strobe 점등이 **녹색**으로 변경됩니다. <br/>
모든 카메라가 충분한 데이터가 수집되면 파란색으로 변경되며, 자동으로 **Shogun Live**에서 **Wand Wave Data**를 처리합니다.

<img src={require('./img/WandWaveResults.png').default} width="50%" height="50%" alt="Example banner"/>
Image Error 점수가 0.1 ~ 0.3 으로 표기되면 정상적으로 완료된 것입니다.





### Volume Origin

Wand Wave Data를 처리한 후 Shogun Live에서 캡처 볼륨의 원점을 설정합니다. <br/>
Wand를 Capture Volume 중앙에 배치합니다. 좌표는 아래 이미지를 기준으로 원하는 방향을 설정해주세요.
<img src={require('./img/Axes_Wand_Origin.png').default} width="70%" height="70%" alt="Example banner"/>

Wand 배치 후 Volume Setup에서 Set Volume Origin의 Start Set Origin 버튼을 클릭합니다. <br/>
몇 초 뒤 Set Origin 버튼이 활성화 되면 해당 버튼을 눌러 원점을 설정합니다. <br/>

3D View를 통해 원점이 잘 설정 되었는지 확인해주세요.





### Floor Plane

원점 설정이 끝난 후 14mm Hard Marker를 최소 5개를 바닥에 배치합니다. 모서리 및 중앙에 배치해주세요. <br/>
< 14mm 하드 마커 이미지 및 배치 된 스튜디오 이미지 >

Volume Setup에서 스패너 아이콘을 클릭 후 고급 옵션을 열어주세요. <br/>
아래 Start Set Floor Plane 버튼을 클릭하고, Set Floor Grid 버튼을 추가로 클릭합니다. <br/>

위 작업이 완료되면 Camera Calibration 과정은 모두 종료입니다.