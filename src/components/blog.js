import React, { useEffect, useState } from "react";
import "../styles/style.css";
import { useTranslation } from "react-i18next";
import BlogCard from "./util-components/BlogCard";
import { Col, Container, Row } from "react-bootstrap";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    setBlogs([
      {
        "mainImage": {
          "asset": {
            "uploadId": "QBA1IIgShDiX3J44iGjzKR3fHQBBb7kA",
            "_rev": "9Sh1niKpid77KkNKMpAA3l",
            "_type": "sanity.imageAsset",
            "extension": "png",
            "url": "https://cdn.sanity.io/images/y26fxi1c/production/4bf09e49e2672e38f4359ca84b5e8182722c04ac-800x533.png",
            "mimeType": "image/png",
            "originalFilename": "640 (17).png",
            "path": "images/y26fxi1c/production/4bf09e49e2672e38f4359ca84b5e8182722c04ac-800x533.png",
            "assetId": "4bf09e49e2672e38f4359ca84b5e8182722c04ac",
            "_id": "image-4bf09e49e2672e38f4359ca84b5e8182722c04ac-800x533-png",
            "size": 354756,
            "_createdAt": "2023-01-09T21:47:05Z",
            "_updatedAt": "2023-01-09T21:47:05Z",
            "sha1hash": "4bf09e49e2672e38f4359ca84b5e8182722c04ac",
            "metadata": {
              "hasAlpha": true,
              "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADEUlEQVQ4jX2S7U/TBxSFf3/HsoQlm1GB6KQ2ZcxSSllBWhjrhi0bagSrGMqqULDFwQqWEhZoYMumsAkVTGUaNpzommnUDBSh0Ja+qOVNp6ADBaPZ9gXhWbo4Y6bzJE/Op3tybu4Vpu7cwxeZpt93nYueEJdGQgwFx5m4fZdhvxf7l3Z2mvTssRRTtH8Puu0aFCkSpBvXIRWvJy0lEY1WxZYCDWpdBsK9+wtM3r6L78YUg4EIVwMRQpO/MfP7fQZHPVQ1VKEr0pFvyCdvl5a09E0okhLYnZeDpbiAfM1mFKkSFNlSUrI3Ifzx518sPnrM3INFZuce/MP8wkMePnqMxz+K2WZGna8ia6sapSaVjaI1ZMsltNVXcq77W76wlKCUiRBL45EoExCWl5dZevKEpaV/WXrmwWsBKmpMKD6UI/9AhkT2NutjY9DnZnK6vZnRn7+ny2Eld7OUDeJVbJDFIvAfraysPPPQ9SCm6n2o8jLQFeaSlaMkQ5ZIvamYX092MNzbhctRw8dqOfHrYohLfBMhOvgCTwMD4TEsteWUVRo55uqky9nBN02N9HW2M3q6hwFXO057FYUfZSEWx7JWFPPqhmMhH5/XWXA46hgbHubWjQnGA2Gmo4x48brd9B110upwsFu/DdG7a18d6A/6qKzeR63ZwMCJ40z3DzDrDzIfmWZ+/CZ3whGmAmHCXj9th78iTZX0Pys/JRporjZRadDzS1Mzoc5uJnrd3Dp3mZn+EWau+pkc8jJ04QKNDTXI3hO/2PB5RY9S11KPrcHGjx1OLrlO0H+yl8Hes3jOnsfjPo+7u4tGaxk5qmTWxL+OMDsX/b/nWWB2fpGZuQUuXrmCteUg1lYrh374miOn2jhy6js6fnJytO84x864OOy0YShSI05YxRtvvYZga+3hZRxs7cFoP0RuiZGCA8WYHGbKWz6jrLmKvY5qPm2qpbS5DqO9Aq3+E5LTM4lLkiPE5ZTyUt4vZbW6hNWZRSRq96IsNJO+00JawX5StpeTvLWc1B1mkrdV8M4WIzKtAVG2nr8B6YLsCoEInj4AAAAASUVORK5CYII=",
              "dimensions": {
                "aspectRatio": 1.5009380863039399,
                "height": 533,
                "_type": "sanity.imageDimensions",
                "width": 800
              },
              "isOpaque": true,
              "blurHash": "V#L}85_Nxvs:D%WBxut6RjbHD%V[afR%t7-pkBbGoMjZ",
              "_type": "sanity.imageMetadata",
              "palette": {
                "lightVibrant": {
                  "background": "#d4c196",
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#000",
                  "title": "#fff",
                  "population": 1.5
                },
                "darkVibrant": {
                  "background": "#04345b",
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#fff",
                  "title": "#fff",
                  "population": 0.02
                },
                "lightMuted": {
                  "foreground": "#000",
                  "title": "#fff",
                  "population": 1.98,
                  "background": "#d5b7b4",
                  "_type": "sanity.imagePaletteSwatch"
                },
                "vibrant": {
                  "background": "#e3d93f",
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#000",
                  "title": "#000",
                  "population": 0.96
                },
                "dominant": {
                  "population": 5.09,
                  "background": "#8e837b",
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#fff",
                  "title": "#fff"
                },
                "_type": "sanity.imagePalette",
                "darkMuted": {
                  "title": "#fff",
                  "population": 0.39,
                  "background": "#2f4662",
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#fff"
                },
                "muted": {
                  "title": "#fff",
                  "population": 5.09,
                  "background": "#8e837b",
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#fff"
                }
              }
            }
          }
        },
        "title": "成功返校的秘诀——牙科检查",
        "body": [
          {
            "_type": "block",
            "style": "normal",
            "_key": "fba062baa4f0",
            "markDefs": [],
            "children": [
              {
                "_key": "6d3f3658c1350",
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "开学前的牙科检查：还不算晚"
              },
              {
                "_type": "span",
                "marks": [],
                "text": "\n",
                "_key": "6d3f3658c1351"
              }
            ]
          },
          {
            "_key": "daf272aecf95",
            "markDefs": [],
            "children": [
              {
                "_key": "063be8a2dc8e0",
                "_type": "span",
                "marks": [],
                "text": "夏天总是充满乐趣和冒险，开学季来得却很突然。如果您像许多父母一样，可能没来得及为您的孩子安排返校牙科就诊。这种检查是对抗学龄儿童最常见的慢性疾病的关键：蛀牙。"
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "markDefs": [],
            "children": [
              {
                "text": "",
                "_key": "7e215ba41df50",
                "_type": "span",
                "marks": []
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "b7b4baeb3910"
          },
          {
            "_key": "90eadf4b219b",
            "markDefs": [],
            "children": [
              {
                "marks": [],
                "text": "幸运的是，如果您错过了开学前牙科检查的机会，现在还为时不晚。您的牙医可以帮助发现潜在的任何问题，如果孩子的某些牙齿习惯在夏季有所疏忽，还可以帮助他们“重回正轨”。在夏季因为有不同的作息，而且周围有更多的食物时，牙齿习惯改变是很常见的。",
                "_key": "0fe9a880cff70",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "当您让您的孩子“准备好开学”时，请确保他们的牙齿也准备好开学！",
                "_key": "f5058b3374a40"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "10a3d8d6a2fc"
          },
          {
            "_key": "9e44aa7bdba0",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "",
                "_key": "c808c2471b980"
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "style": "normal",
            "_key": "f2480ff4be7c",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "在家养成良好的牙科习惯",
                "_key": "85ac5af2e51a0"
              }
            ],
            "_type": "block"
          },
          {
            "markDefs": [],
            "children": [
              {
                "marks": [],
                "text": "",
                "_key": "e4a3369f786f0",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "61290007d4c7"
          },
          {
            "_key": "c4eeef9bcc42",
            "asset": {
              "uploadId": "i7bN27hXe7G2NvoRshiqz8d1TrI8KfBS",
              "_id": "image-bcae36610331af1c7d06fca17b4c87e614afcae6-720x405-png",
              "_type": "sanity.imageAsset",
              "_rev": "9Sh1niKpid77KkNKMpB3T7",
              "size": 269857,
              "extension": "png",
              "_createdAt": "2023-01-09T21:48:10Z",
              "mimeType": "image/png",
              "originalFilename": "640 (18).png",
              "metadata": {
                "hasAlpha": true,
                "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC20lEQVQokW2R3U9TBwBH73+0ZMmyZE9mD8u2LHFZFnSLmzIXNS4ODTMMoUVQyscoFsc2Vu5YaSktWrz98N6WXQO1LaEFirawXlqkn9mTYqEKU9L2LJDx5i85rycn+QmhxVXk2UW8D6J41AUCDxeZjQRwuNr4489G5LvtrATGUewit3q7cA4bSCpjZENOchEX+QUv2YiLlPwLy5Y2hISWZTGRPmQpkSapbfJ4dR6X1MGE5TxhzwCZsJfVOZmHbjtRr4312SnW/CJLrtus+S1sBO1o8hCPJvUIW9sVnpV32CpXeL79gvJOhSfZOJLUhWS9QkIeoRjxUZiXyYa95KJ+NqMKoWkz1kEd8mgPa8rvpHxG4nYdQq1e54h6vU61WiWXS+Bx9eK3XCMxPUxKmSSjTpGfc1KKuiksBYj9dQ+HOIx3tJ+E52eSHiNBcwsC/+9AdrBarcbmRgrHmIk7g9eYGenH8ZuI32pD81koBu0UYz6eLAdZjagk1btoAZEVZw9K30WEA9ERR8L0eprBvgE6L11A1LfT3WKi8wcTLuMtEtIY+bBEKT5H6XGEQkwhExCJj+lQb5x9c2FGS2PoNHD6xEn6vr+EePUm+q91XP+mBZ/pJzKKjVLETS40jeYXWbnTi/rrZcavf/GGwmoVLfk3hvabnDjeQHNjI05dG47WDsytncyMmMj4bWTVcRbsPdwbbsJmOkf/jQYuNr2P8GrvX3Zf7rK3t3d4yAHa2jp9XUZOfX6G81+dwaxrJiwOsOK2sj4nUYjeJ6VO4BhqRv/jp1xt/Yizl49xvPEdhMrzMltPn1Eul3n1+jW1ao1SrohtdIKWK3q6dXqkkV6Syjj5aIBi/AGl+Azp0BSS2EF760m+bfqAhnPv8eGXbyPsVl5S2d7hRaXC/v7+ofBp6R+USQmj4TZW0UxMnmAjcp/8cpDiskoh5iE/P8WS28RQ93ecvvAxn5x6l2OfvcV/agy0xWeF/fkAAAAASUVORK5CYII=",
                "dimensions": {
                  "width": 720,
                  "aspectRatio": 1.7777777777777777,
                  "height": 405,
                  "_type": "sanity.imageDimensions"
                },
                "isOpaque": true,
                "blurHash": "MoOD2s.T%g?HMxxZNGn,NHs:NGWBRje.bH",
                "_type": "sanity.imageMetadata",
                "palette": {
                  "vibrant": {
                    "background": "#1f71bb",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.7
                  },
                  "dominant": {
                    "population": 5.21,
                    "background": "#94996a",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff"
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "population": 3.31,
                    "background": "#55663a",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff"
                  },
                  "muted": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 5.21,
                    "background": "#94996a"
                  },
                  "lightVibrant": {
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 0.13,
                    "background": "#ecb188",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "darkVibrant": {
                    "population": 0,
                    "background": "#124471",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff"
                  },
                  "lightMuted": {
                    "background": "#dcc7b7",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#000",
                    "population": 3.3
                  }
                }
              },
              "_updatedAt": "2023-01-09T21:48:10Z",
              "assetId": "bcae36610331af1c7d06fca17b4c87e614afcae6",
              "path": "images/y26fxi1c/production/bcae36610331af1c7d06fca17b4c87e614afcae6-720x405.png",
              "sha1hash": "bcae36610331af1c7d06fca17b4c87e614afcae6",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/bcae36610331af1c7d06fca17b4c87e614afcae6-720x405.png"
            },
            "_type": "image"
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "b619b3df60be",
            "markDefs": [],
            "children": [
              {
                "text": "父母在教导孩子良好的牙齿习惯方面起着最重要的作用。您应该鼓励您的孩子每天刷牙两次并在睡前使用牙线。一些窍门",
                "_key": "ac84330a12e40",
                "_type": "span",
                "marks": []
              }
            ]
          },
          {
            "_key": "98c8a426d559",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "",
                "_key": "818e5e62f1250"
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "children": [
              {
                "marks": [
                  "strong"
                ],
                "text": "6 岁及以下",
                "_key": "d69407195bdc0",
                "_type": "span"
              }
            ],
            "level": 1,
            "_type": "block",
            "style": "normal",
            "_key": "5aa6f5e6848c",
            "listItem": "bullet",
            "markDefs": []
          },
          {
            "children": [
              {
                "marks": [],
                "text": "您的孩子可能愿意刷牙，但还没有完成正确工作所需的精细运动技能。激发他们刷牙的兴奋度，但要注意他们的技术。儿童时期口腔变化日新月异，导致 5 或 6 岁的孩子刷牙的方式通常与 2 或 3 岁时相同。他们通常不会刷在口腔后部新长出的磨牙。这也就给了第一颗磨牙发展为蛀牙的可趁之机。\n",
                "_key": "cea5a89e9f18",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "c589b0764096",
            "markDefs": []
          },
          {
            "style": "normal",
            "_key": "d8fc3b7dc428",
            "listItem": "bullet",
            "markDefs": [],
            "children": [
              {
                "_key": "1761e51026930",
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "7 至 12 岁"
              }
            ],
            "level": 1,
            "_type": "block"
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "63641f214f57",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "在这个年龄，您的孩子知道该做什么，但懒惰正在成为一种习惯。继续鼓励正确的刷牙和使用牙线的习惯。父母应该强调孩子了解自我照顾和对自己行为的责任。\n",
                "_key": "0754254e6f35"
              }
            ]
          },
          {
            "listItem": "bullet",
            "markDefs": [],
            "children": [
              {
                "_key": "a7e0039b39b30",
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "12 至 18 岁"
              }
            ],
            "level": 1,
            "_type": "block",
            "style": "normal",
            "_key": "832d2684d8a9"
          },
          {
            "style": "normal",
            "_key": "b0245fe75f18",
            "markDefs": [],
            "children": [
              {
                "_key": "cb46355fb724",
                "_type": "span",
                "marks": [],
                "text": "这是牙齿健康最关键的时期。研究表明：青少年时期和成年早期是第二个最常见的蛀牙时期。在这段时间里，父母开始对孩子的饮食缺乏控制：学校里随处可见的苏打水和糖果。这样放肆的学校零食时间会对他们的牙釉质造成伤害。即使您的孩子可能非常负责任并且能够照顾好自己，也要提醒他们保持口腔卫生的重要性。这些习惯将陪伴他们到成年。\n"
              }
            ],
            "_type": "block"
          },
          {
            "_key": "6710e972d701",
            "markDefs": [],
            "children": [
              {
                "marks": [
                  "strong"
                ],
                "text": "时间很重要",
                "_key": "105286a42bac0",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "cdf19828daf1",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "",
                "_key": "495c6bc17cbb0"
              }
            ]
          },
          {
            "_type": "image",
            "_key": "1a76a09e6510",
            "asset": {
              "assetId": "51fa2a75593c00461cafddb7e2a5f22f2e4d1260",
              "_rev": "3q3ySoeGye0Syz1GmBaWgZ",
              "_id": "image-51fa2a75593c00461cafddb7e2a5f22f2e4d1260-1080x608-png",
              "sha1hash": "51fa2a75593c00461cafddb7e2a5f22f2e4d1260",
              "size": 571973,
              "uploadId": "GU2dcfP6rQLzrd1advTfatAVRPCwiId9",
              "_createdAt": "2023-01-09T21:49:03Z",
              "_updatedAt": "2023-01-09T21:49:03Z",
              "extension": "png",
              "originalFilename": "640 (19).png",
              "metadata": {
                "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAACq0lEQVQokU3T7WtTVwDH8fufCQPfCXsxhowhjIKwiYKMORwM7AtdbatuSaow6DoHPlTnasfaLU1M83Cfzn1q2t60s1mT1K5tSk2tJqk3uU3yHTnF4YsP57z68jsvjvLd0DBD10e4cfN7fojEiMbGGBu7I0UiMUZv3OLqtSGuD48yOzNLbbfK0dtDwkZdatffEDYbdMOQXq+H8tmnZzg3MMCVr78iOjrM3Z/GefxokidPfmVy8iETExNEojGi0TGSiSQHtRq9o5BOu3WsFciz1+lAP/jxByf48vSH3LwwwMTVb5i6+yPzc7OomRSZVIK5+J9MP53i6dRvWJZFbX+fIGjxNgjkGbzTatMOQ5Tzp04SO3eGB5c/59HgRf4Yj2DMx1mwdBaEiidUbDOHIzQKBZ/1yibrL7al0osdNrZ2+Xdnj+rePrVXb1AuffIRdy6e5d7lL7j/7QVmxqM4uWf4rsmyo7PsGpKft1lZKeD5zzG8FVTHR3N8RH6VxdV1npc2KW/uoNwevsYvt4a4NzLI/ZFB4g9/xtPTMuj3Q54pg0uuged56M4SKX2BuaxDQnWZN/Noro+7vIa/VkZJpxKkk3GSs9PEpx+T/ut3bPUZi5YqF/ajeUvFyCTJZbPo9iK6V8DMr+L5RbluabVEYa1Cpb/QsU0cW2DZJsLUMPUMQkvjmlk8kZOEmmI+MYMwdUobm2zvvmSvdsDreoN645BXB6/Z3qlSre6iCENDCAPbFjiOheMIbNvAsXUcS8Pur9Mz6FqaYvFvms0mYbtN2G5xFLbpHIU0G3Uq5TL/FIsouWwaVc3KqOtYuG4/ehw+ZiIsXd43Nsq0goBupyNj74KHh02q1SrbW1soajaDpuWwLAPXtaXjoIXdZ4v/X1CulAiCQP6I93W7XcIwlP4DVTTgU/xWHNkAAAAASUVORK5CYII=",
                "dimensions": {
                  "_type": "sanity.imageDimensions",
                  "width": 1080,
                  "aspectRatio": 1.7763157894736843,
                  "height": 608
                },
                "isOpaque": true,
                "blurHash": "M8O3^J00xb-=000000xZaKIV?v0M_3~W9G",
                "_type": "sanity.imageMetadata",
                "palette": {
                  "darkMuted": {
                    "title": "#fff",
                    "population": 1.29,
                    "background": "#785046",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "muted": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 2.69,
                    "background": "#ab7e6f",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "lightVibrant": {
                    "background": "#ecd4d8",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#000",
                    "population": 0.01
                  },
                  "darkVibrant": {
                    "population": 0,
                    "background": "#5b2831",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff"
                  },
                  "lightMuted": {
                    "foreground": "#000",
                    "title": "#000",
                    "population": 6.39,
                    "background": "#d4cbc3",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "vibrant": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0,
                    "background": "#b04e5e"
                  },
                  "dominant": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#000",
                    "population": 6.39,
                    "background": "#d4cbc3"
                  },
                  "_type": "sanity.imagePalette"
                },
                "hasAlpha": true
              },
              "_type": "sanity.imageAsset",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/51fa2a75593c00461cafddb7e2a5f22f2e4d1260-1080x608.png",
              "path": "images/y26fxi1c/production/51fa2a75593c00461cafddb7e2a5f22f2e4d1260-1080x608.png",
              "mimeType": "image/png"
            }
          },
          {
            "markDefs": [],
            "children": [
              {
                "_key": "0b94fb9f42ce0",
                "_type": "span",
                "marks": [
                  "em"
                ],
                "text": "“您需要为您的孩子选择一天中状态最好的时候”，"
              },
              {
                "_type": "span",
                "marks": [],
                "text": "我们的儿科牙医 邱医生说。",
                "_key": "0b94fb9f42ce1"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "02d912d6a927"
          },
          {
            "children": [
              {
                "_key": "418ca23b23af0",
                "_type": "span",
                "marks": [
                  "em"
                ],
                "text": "“您将在什么时间或哪一天安排您孩子的检查，将对牙齿检查情况产生影响。一天中不同的时间的确可以影响孩子进行检查时配合度。这一点在父母预约检查时应该考虑到 ”，"
              },
              {
                "_type": "span",
                "marks": [],
                "text": "邱医生推荐到。",
                "_key": "418ca23b23af1"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "4488bfbee989",
            "markDefs": []
          },
          {
            "_key": "9e71e861a3b7",
            "markDefs": [],
            "children": [
              {
                "marks": [],
                "text": "",
                "_key": "5526e1256196",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "markDefs": [],
            "children": [
              {
                "text": "为他们选择一天中的好时机。",
                "_key": "6089fa34e2490",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "b0672fcbcf0a"
          },
          {
            "listItem": "bullet",
            "markDefs": [],
            "children": [
              {
                "_key": "2a0eb7f8eaa00",
                "_type": "span",
                "marks": [],
                "text": "对于年幼的孩子，当您计划他们的牙科预约时，将他们的午睡时间表考虑在内。当您安排在午睡时间或之后就诊时，孩子们可能会胡思乱想，无法获得最佳的牙医体验。\n"
              }
            ],
            "level": 1,
            "_type": "block",
            "style": "normal",
            "_key": "d7b2669023fc"
          },
          {
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "在漫长的一天放学和课后活动之后，青少年可能提不起兴趣看牙医牙医。这种情况将就诊时间安排在周末是个不错的选择。",
                "_key": "eb6674109ac40"
              }
            ],
            "level": 1,
            "_type": "block",
            "style": "normal",
            "_key": "66fbee10ba47",
            "listItem": "bullet",
            "markDefs": []
          },
          {
            "children": [
              {
                "marks": [],
                "text": "不要让就诊失败：选择一个最适合他们的时间。",
                "_key": "fe5f46adafcf0",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "ecb01593aaef",
            "markDefs": []
          },
          {
            "children": [
              {
                "marks": [],
                "text": "",
                "_key": "a11261bcecff0",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "d2f15dba2ef4",
            "markDefs": []
          },
          {
            "children": [
              {
                "marks": [
                  "strong"
                ],
                "text": "饥饿的孩子会是一个脾气暴躁的患者",
                "_key": "c29928c2932f0",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "95d7a6f20929",
            "markDefs": []
          },
          {
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "",
                "_key": "f97abaf585e00"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "838ffad24eaa"
          },
          {
            "_type": "image",
            "_key": "3762922c66f0",
            "asset": {
              "size": 716848,
              "_id": "image-e49d4f327be131df18b8f2769a6b9a4aa3aa8626-1080x718-png",
              "metadata": {
                "dimensions": {
                  "width": 1080,
                  "aspectRatio": 1.5041782729805013,
                  "height": 718,
                  "_type": "sanity.imageDimensions"
                },
                "isOpaque": true,
                "blurHash": "VEMtHs%#%~D4Rj-nM{yE%Mxv*JMdDOo}RPtRaeMdW;t7",
                "_type": "sanity.imageMetadata",
                "palette": {
                  "lightVibrant": {
                    "title": "#fff",
                    "population": 0.17,
                    "background": "#e2b0a0",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000"
                  },
                  "darkVibrant": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.6,
                    "background": "#592f23",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "lightMuted": {
                    "population": 0.47,
                    "background": "#cfaea0",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff"
                  },
                  "vibrant": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0,
                    "background": "#cc5c4c"
                  },
                  "dominant": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 2.84,
                    "background": "#a26952"
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.59,
                    "background": "#372420",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "muted": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 2.84,
                    "background": "#a26952"
                  }
                },
                "hasAlpha": true,
                "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADOklEQVQ4jSWOSW8bBQBG/bc4cUCREAhxABUqBKoEkaIcoFRq1YIoiNJUAimQtmpD2qZZitPEdhLH26yefcaz2DO2x+MtdhIQ/I2HCIen750+vVwYB1iOiiSUaJzsIVRfo4hHWHoD15YJfYO2r+NbEp4pYTZrKI0imnSM2azj2gpJv0M6zojTLjnDUdFMAbVZodmsYFoCLV+n3WkRxwFJaJM0a8RimcRRSXyTttckaul0Oh5xN6SbxvSHKb1hSs50m7iBRSv8DwM/MgkjhyBw8F0Tt1HG3l3H335C+3CXTu2ArlQmdVSG3ZBs1GcwHpBNRwxnU3LJICEdpQwmGf1hQhiamFoDuXpE4yBP9fljTh7cofb9VzR+uI6wcgvl4T2cV+tE9RJd32IwSsmm4/8P02GfbDpken7KZD4i8HXkehHh6AChkKf6+yr5m5+z8cm7bHz0NruLVyjdXqJy/ybC2j2M0g5R6NDNevRHA3K9NCGbDJicTRhOUjxHQRWOsTWVwNLR8hvkv77G6ntv8mDhDdavvkPxxjWOv1mi8O0yxw/vY8oVOklEkibkkiSgn3ZIhwlx7GFqdXS5hu/axKFHq15C+O0ntpc/Y+2DBZ5eeYs/vnifwvVPObyzzMnPd9H3d4hcg063Q842BDxbwncVXEvCUKsYShVbE3F0CVcVcGpl5M2nHNy9webihzz+eIEXS1cRf13B3X5Ga2+LQK4RRi1yQiWPVHlNUzzCs1XagUsn9C7Xdw1sTcZUJSxJQC3sUVhdYe3LRTa+u4VVLpF5Homu4Kp1DF0kt7+1Rnn/BbpcpdeNmZ7Omc3Pmc3OmIynxO0IoynTFBvosoRcqVDYfsnR3iscUyNJEnzPo3pSpHCwRe7JL7cp5TdwHZ0sG3I6v+Ds4m/OL/mH6XRO0GohN+pItRqKICI1RFRJRG/KWIaOKIps72zy/MUjcs8e/Ui5tIttabTbEWk6YDyZMZnOOZ1dMD/7i14vRVMUauUylcNDhGoVTVXQVRlNlZEVmdLxIYflA3Kl/S3q1SKyXMPQVYLAp9cfkGVjRqMps/mfl24ZJrXyCcfFIlKjjqnrl3WObRK2I6K4TRSH/As0ZTdl/XhZagAAAABJRU5ErkJggg=="
              },
              "_type": "sanity.imageAsset",
              "assetId": "e49d4f327be131df18b8f2769a6b9a4aa3aa8626",
              "_rev": "3q3ySoeGye0Syz1GmBaitv",
              "path": "images/y26fxi1c/production/e49d4f327be131df18b8f2769a6b9a4aa3aa8626-1080x718.png",
              "mimeType": "image/png",
              "sha1hash": "e49d4f327be131df18b8f2769a6b9a4aa3aa8626",
              "_createdAt": "2023-01-09T21:49:44Z",
              "extension": "png",
              "uploadId": "QnrNNpCvnHoqtLhUafwSZqIIEDcKorT2",
              "originalFilename": "640 (20).png",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/e49d4f327be131df18b8f2769a6b9a4aa3aa8626-1080x718.png",
              "_updatedAt": "2023-01-09T21:49:44Z"
            }
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "a14ffd21df69",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "确保您的孩子在预约前一小时吃点便餐。如果他们必须得修补蛀牙，那么肚子不咕噜咕噜叫可是帮了大忙了。",
                "_key": "048dea4926470"
              }
            ]
          },
          {
            "markDefs": [],
            "children": [
              {
                "text": "",
                "_key": "b0b4f51e8f5b0",
                "_type": "span",
                "marks": []
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "f93a410548e8"
          },
          {
            "style": "normal",
            "_key": "a2ce0c8f9ef6",
            "markDefs": [],
            "children": [
              {
                "text": "父母们别紧张！",
                "_key": "fb163fa78e420",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              }
            ],
            "_type": "block"
          },
          {
            "_key": "0b68e9893a88",
            "markDefs": [],
            "children": [
              {
                "marks": [],
                "text": "控制住自己。成年人也对看牙医感到焦虑，如果您感到紧张，您的孩子很可能会注意到这一点。与他们开诚布公地交流看牙医是可能会发生什么，但最好以积极的态度沟通。让他们知道他们的牙医会在做任何事情之前回答他们所有的问题，并且没有什么可害怕的。",
                "_key": "0d98d9ab6d1c0",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "markDefs": [],
            "children": [
              {
                "marks": [],
                "text": "此外，您希望他们在一次愉快的就诊后感到成就和成功。您应该将这种积极的感觉与他们的牙齿坚固健康的想法联系起来。您的孩子会在他们的余生中记住这条信息。\n",
                "_key": "e404a000d1cb0",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "6ea7b9f566b0"
          },
          {
            "children": [
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "保持冷静",
                "_key": "e9e270c9c84d0"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "238d834eb6a1",
            "markDefs": []
          },
          {
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "",
                "_key": "ef67354ab5980"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "7112c356c4ed",
            "markDefs": []
          },
          {
            "_type": "image",
            "_key": "b633e91dd2ab",
            "asset": {
              "sha1hash": "e96d8ffb126e94ef280584f857bb984ce8510b19",
              "originalFilename": "640 (21).png",
              "_id": "image-e96d8ffb126e94ef280584f857bb984ce8510b19-1080x718-png",
              "_type": "sanity.imageAsset",
              "mimeType": "image/png",
              "uploadId": "8D1rj7ecDGtr7zwbypnObBoOrKXo2jgQ",
              "assetId": "e96d8ffb126e94ef280584f857bb984ce8510b19",
              "extension": "png",
              "size": 651726,
              "path": "images/y26fxi1c/production/e96d8ffb126e94ef280584f857bb984ce8510b19-1080x718.png",
              "metadata": {
                "blurHash": "VnMbJN~C-VxaofxuM{ofWCt7RjR*WBofWCR*ays:R*of",
                "_type": "sanity.imageMetadata",
                "palette": {
                  "darkVibrant": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.63,
                    "background": "#16323c",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "lightMuted": {
                    "background": "#afd3d9",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#000",
                    "population": 7.93
                  },
                  "vibrant": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 8.98,
                    "background": "#32919d"
                  },
                  "dominant": {
                    "population": 8.98,
                    "background": "#32919d",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff"
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "title": "#fff",
                    "population": 0,
                    "background": "#2c4c48",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "muted": {
                    "background": "#6dafb8",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 7.73
                  },
                  "lightVibrant": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#000",
                    "population": 0.32,
                    "background": "#c6f6f8"
                  }
                },
                "hasAlpha": true,
                "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC5UlEQVQ4jWWT2U5bVxSG/Rh9gTxAq0bqTe8q1CeochEpN0l715tWqqJetEoLUpQmUROGQkMIGRhTzGASIMbYYDyChwOej0cwxmBMigd8XMFX7SUhReFIS/tIe5/vrP//1zZ5tSjTNifTy2ssufxM2px0jpjpem1hbEPDEteZj6d5vRWnzxOk3xtkaEPjsWuTXk+Aqe0EjkyB0F4ZvVLFlN0tEU7oaIk08WwBf1xnbM3LkMODWYsxF9N5E0/LOhqKMhNN8S6Vlfdu9yYDvhAjoQhvE2kCxX1MrXab5mmLZqtFyzA4PKnhz++ynMxgTWWZi6YEaNPzLCQy2NN5PIWiAPq9Ie46PNxf8/EisM1KOo+Jj56TlkGkXMG3U5IPFcwS01nNFAS2lMyylMwwHUnS4w7w89IqXStuxsJRbAp4fn7Oh/X+tIVWOsC3sycSFGQxmWE9t4sztyM/ULAJLS6S7zo84qnqWFkhHSrQxVppNPEW9gQQLJZx5XfloCpzJMmrYESA/2wn+Msb5NnmFtZUjmU9JwFdAu7X6tgzBTng3ynhzhdF8t++MD8t2Lm96OB5YJuXwQi/21zcW/XKvrJieHPrsuTSSV02VaqqO+XjbDTFH6tevjMv8uObFQb9Yenu+zkrt6YWeOj0S+p9nsDlUMq1hnSofFOpqVXJU3P3q9XJn+sb4pmCfGte4OuhSa6PW/jNti5pS4dnZ2dSF6HEyhU8+aKMjJI3Go7KvN1ZXqfL7ubBmk8A1ycsXO19zpf9r7gxOc8P8zZMRsugXq9Tr9UwDIOG0SZX/VeCUUOsxkGZrWR2rrikHrk2JN1ro7N81j3MF30v+GpwnI6nE5ga9QbHR1Wq1SOazSZ1w0CvHItcJVUlewF84g8zE0nKVVO+/mJ18s3oDB1Px/m8Z5gr9wcwtY02p82mwP5rt6XDxOGReDeuxZjU4mK4AiqwurPZ6nsSB0fYM3m52zen3vLp42d80tXD/2g3dCdQk0N7AAAAAElFTkSuQmCC",
                "dimensions": {
                  "height": 718,
                  "_type": "sanity.imageDimensions",
                  "width": 1080,
                  "aspectRatio": 1.5041782729805013
                },
                "isOpaque": true
              },
              "_updatedAt": "2023-01-09T21:50:27Z",
              "_createdAt": "2023-01-09T21:50:27Z",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/e96d8ffb126e94ef280584f857bb984ce8510b19-1080x718.png",
              "_rev": "3q3ySoeGye0Syz1GmBaqHr"
            }
          },
          {
            "style": "normal",
            "_key": "a82a77bb246c",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "如果事情进展不顺利，不要惊慌。那么，如果您的孩子在探视期间感到不高兴怎么办？",
                "_key": "a4662a0f2a730"
              }
            ],
            "_type": "block"
          },
          {
            "style": "normal",
            "_key": "3e8d2e13898a",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "您能做的最糟糕的事情就是把他们从牙科椅上拿下来然后离开。这可能会给他们带来更大的创伤，下次就诊也不会愉快。",
                "_key": "086227c4e2da0"
              }
            ],
            "_type": "block"
          },
          {
            "_key": "86bb2b76ed57",
            "listItem": "bullet",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "首先，找出您的孩子不高兴的原因。问问自己：我的孩子是真的害怕还是只是在测试情况？牙科诊所对任何孩子来说都是一个未知的领域，他们常常觉得自己无法控制并感到害怕。我们的牙医对孩子有自己的方式，将每个动作分解成小步骤，让孩子参与其中，让他们在每一步后都感到有成就感。",
                "_key": "ad165ed5020e0"
              }
            ],
            "level": 1,
            "_type": "block",
            "style": "normal"
          },
          {
            "style": "normal",
            "_key": "020e562925b4",
            "listItem": "bullet",
            "markDefs": [],
            "children": [
              {
                "marks": [],
                "text": "其次，让牙医主导谈话并与您的孩子建立良好的关系。归根结底，我们的牙医知道如何与小孩子互动！",
                "_key": "6a2753ccb7710",
                "_type": "span"
              }
            ],
            "level": 1,
            "_type": "block"
          },
          {
            "children": [
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "保持健康的微笑",
                "_key": "ab199a3915720"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "644882ec41b8",
            "markDefs": []
          },
          {
            "markDefs": [],
            "children": [
              {
                "text": "",
                "_key": "0f4c813ba3100",
                "_type": "span",
                "marks": []
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "97cd8d712e1f"
          },
          {
            "markDefs": [],
            "children": [
              {
                "_key": "7f4fa6e3feb90",
                "_type": "span",
                "marks": [],
                "text": "医生建议一年进行两次常规的牙齿检查。孩子的口腔健康在很大程度上取决于在家中的常规护理是否到位和父母是否在孩子的不同年龄阶段尽到相应的责任。"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "154ee31911b0"
          },
          {
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "以下是父母可以确保他们的孩子避免蛀牙和其他牙齿疾病的几种方法：",
                "_key": "4abc515291950"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "388ad984b4dd"
          },
          {
            "_key": "c30e29ada855",
            "listItem": "bullet",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "定期刷牙和使用牙线",
                "_key": "aad93cbc52210"
              },
              {
                "_key": "aad93cbc52211",
                "_type": "span",
                "marks": [],
                "text": "：使用含氟牙膏，并确保每三个月更换一次牙刷。让您的孩子每天至少刷牙两次并用牙线清洁一次。"
              }
            ],
            "level": 1,
            "_type": "block",
            "style": "normal"
          },
          {
            "_key": "99ba8693ccfb",
            "listItem": "bullet",
            "markDefs": [],
            "children": [
              {
                "text": "健康饮食：",
                "_key": "e32aaabe57470",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              },
              {
                "marks": [],
                "text": "虽然您无法对孩子的饮食进行完全的控制，但通过在家提供健康食品和自带健康零食，您可以确保您的孩子均衡饮食，包括谷物、牛奶、蔬菜和水果。",
                "_key": "e32aaabe57471",
                "_type": "span"
              }
            ],
            "level": 1,
            "_type": "block",
            "style": "normal"
          },
          {
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "限制糖的摄入量",
                "_key": "63d408a4927e0"
              },
              {
                "_type": "span",
                "marks": [],
                "text": "：众所周知糖是孩子的最爱，但糖对孩子的口腔健康有害，所以尽量减少或消除含糖食物和软饮料。",
                "_key": "63d408a4927e1"
              }
            ],
            "level": 1,
            "_type": "block",
            "style": "normal",
            "_key": "56dc84de0d63",
            "listItem": "bullet"
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "4cd03ba91c27",
            "listItem": "bullet",
            "markDefs": [],
            "children": [
              {
                "_key": "41a7cee61d280",
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "确保不要跳过您孩子定期安排的检查"
              },
              {
                "_key": "41a7cee61d281",
                "_type": "span",
                "marks": [],
                "text": "，并尝试在假期、夏令营和其他活动期间也做好安排，以确保您的孩子不要漏掉他们需要的常规清洁和检查。"
              }
            ],
            "level": 1
          },
          {
            "markDefs": [],
            "children": [
              {
                "_key": "c44d3ff64b350",
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "还不算晚，但是请尽完成！"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "f6bb39fc2301"
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "ea7f38421fad",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "",
                "_key": "da6dbdfd1718"
              }
            ]
          },
          {
            "asset": {
              "mimeType": "image/png",
              "uploadId": "jEDFTL9AFPzL75OIHmdlDhTgbLuymfPX",
              "extension": "png",
              "metadata": {
                "palette": {
                  "lightMuted": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#000",
                    "population": 2.72,
                    "background": "#d1e0e7"
                  },
                  "vibrant": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.98,
                    "background": "#1067e3"
                  },
                  "dominant": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 5.28,
                    "background": "#322a33"
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 5.28,
                    "background": "#322a33"
                  },
                  "muted": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 1.79,
                    "background": "#618db6",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "lightVibrant": {
                    "background": "#f9a973",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 3.05
                  },
                  "darkVibrant": {
                    "title": "#fff",
                    "population": 4.71,
                    "background": "#083f94",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  }
                },
                "hasAlpha": true,
                "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAACw0lEQVQokR3PbU9SCwDA8bOVeg5p3ZaLbO3aXHertR7XepFla2Vbpd22u55pS8wMETjAOQeBgNQEzFtyYVI+hCLyGApKYKu19abaet3qzX3Z9/i3+gK/7SdEX8wSfTFNLD5FLBrDF4rS4Zpls1aiQVlDtC0jDVUQPTW2qwWMTxb4UMrwbT3LdPw5Z9XntFmStJqT6E1LCIbHLzE8mccQmsMQmOZvJc5eyxyNWhlxqIrkLKPzVhE967RqOVzP5vhSSvK1/JKFyDiXB4PsNk6x836C5gcpBL2cYoc7T4uSZsdAkuaeBE09CSTHCpJ3HcnzGp1vHdFdZZ+WIjgR5XNykk9zYRIjGv/csdJy2U/jtQg6wyxCnTVPvVKkwZql3pShvi9NQ+8iorz8G9Q9rCJ5a4hahf2OecZGw7yPBHgzrhKV79HddYPm9n7qOgPUXYkgNFhziM4CkpxFkgtI1gKSKY3kKP2GdJ4KOncFnbrKX/YFZE+IlVGVgtaHerWbw8fOIx24wYZ2BxsvhhHqB9KIcg6dPYtkyyP2pxHvLyL+KrurSK5VNg2tsethhUsjSzwNhagND5A1XcHd1UFXRyd7T9xiy0kLGzuHEbZaMuiVPC3ODHpblu2mNHpTij9+geoaolykyVnmiL+GJVxgemKKlaCXotJD0nSNGYsRtdfCwQt26s74EPa4ihwIlDnkL3LYX+aor8wRd5FWV4lGRwnRnKNNyXP9UYFBbZFeWwqHluCxc4KAOYjP9gxbX5DjF92Ip4YQ2pw5jo+ucf5plUuRt5wbr3HM/Yo/lSJN8jKN5gynvYv8NxlnaWSMSe+/hP1xRtQIVlOM28YZDFeDdF+w03rKgrCtf56OsVUezH9ATn3kZvQdB5UMW80ZRGuRpoE07Vqa4WCC6sQw/8/Y+bFg53tskM/jMiWfSqHPyNTN65w5e5ef+R3Ln3jFfWkAAAAASUVORK5CYII=",
                "dimensions": {
                  "height": 512,
                  "_type": "sanity.imageDimensions",
                  "width": 1024,
                  "aspectRatio": 2
                },
                "isOpaque": true,
                "blurHash": "MUD,HIBrM_}lAJK5#lsSobS6-Un#s:t6V@",
                "_type": "sanity.imageMetadata"
              },
              "originalFilename": "640 (5).png",
              "_updatedAt": "2023-01-09T20:09:08Z",
              "_type": "sanity.imageAsset",
              "sha1hash": "bfe60cfb32f0e79e6a44947b94a01691bcf2a091",
              "_id": "image-bfe60cfb32f0e79e6a44947b94a01691bcf2a091-1024x512-png",
              "_rev": "3q3ySoeGye0Syz1GmAw1ZJ",
              "_createdAt": "2023-01-09T20:09:08Z",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/bfe60cfb32f0e79e6a44947b94a01691bcf2a091-1024x512.png",
              "size": 611551,
              "path": "images/y26fxi1c/production/bfe60cfb32f0e79e6a44947b94a01691bcf2a091-1024x512.png",
              "assetId": "bfe60cfb32f0e79e6a44947b94a01691bcf2a091"
            },
            "_type": "image",
            "_key": "7ce5caa19eda"
          },
          {
            "markDefs": [],
            "children": [
              {
                "_key": "118672b660a60",
                "_type": "span",
                "marks": [],
                "text": "让您的孩子接受检查，然后放松并享受本周剩下的时间，因为他们知道他们已经准备好带着健康的微笑去上学和参加新的活动！\n"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "b4e8df98e5a3"
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "5fd42eecaa7e",
            "markDefs": [],
            "children": [
              {
                "_key": "ff05e21d76d20",
                "_type": "span",
                "marks": [],
                "text": "请致电致电 (021) 5169-9696 与我们的 French Dentist 团队预约医生，或立即扫描二维码在线申请预约："
              }
            ]
          },
          {
            "children": [
              {
                "_key": "fe0e1fceaa10",
                "_type": "span",
                "marks": [],
                "text": ""
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "89387e61fca8",
            "markDefs": []
          },
          {
            "_key": "765b7d6d0248",
            "asset": {
              "_id": "image-9ab49bf6722ad91dc897daa32c0ae0a98aae7936-440x444-jpg",
              "metadata": {
                "hasAlpha": false,
                "lqip": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAQCAwUG/8QAKBAAAQMDAwMDBQAAAAAAAAAAAQIDBAAFEQYSIRNRYSIjQTEyQoGh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOzcojsudLbTcX8mQdm1ZBTjx2rF24yLE24pc555srDeFKKikkfbmtstbsXU7xhMkMuuK9Lh+pH5E/Arn6gvir/EU1JjRorMV7C+mMrWccEUFVqlyHopWy/KdSpRJPY9v1SrbIytdtZLJSsYAJCdvOKUHpLbpe3yptz6xfUFK5HU81PJ0VaG2faS8gqUMlKhz/KUoLm4SIG6PFWtDSTwOD8DxSlKD//Z",
                "dimensions": {
                  "aspectRatio": 0.990990990990991,
                  "height": 444,
                  "_type": "sanity.imageDimensions",
                  "width": 440
                },
                "isOpaque": true,
                "blurHash": "eBLN.4-;%Mj[~qofj[M{%MfQ-;M{xuxuD%RjM{%M%MWB~qRjD%oft7",
                "_type": "sanity.imageMetadata",
                "palette": {
                  "lightVibrant": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 0,
                    "background": "#c0b8b9"
                  },
                  "darkVibrant": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0,
                    "background": "#463e3f"
                  },
                  "lightMuted": {
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 0.01,
                    "background": "#bcb4b5",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "vibrant": {
                    "background": "#86787a",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0
                  },
                  "dominant": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.61,
                    "background": "#444444",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "background": "#444444",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.61
                  },
                  "muted": {
                    "background": "#847c84",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0
                  }
                }
              },
              "assetId": "9ab49bf6722ad91dc897daa32c0ae0a98aae7936",
              "_createdAt": "2023-01-06T11:31:11Z",
              "extension": "jpg",
              "originalFilename": "640 (5).jpeg",
              "uploadId": "UF7biKwfDI2DxWak5JgRbTXnIYueEnlX",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/9ab49bf6722ad91dc897daa32c0ae0a98aae7936-440x444.jpg",
              "_updatedAt": "2023-01-06T11:31:11Z",
              "size": 42572,
              "_rev": "qLNVIvT2xXiIXINTMgkutQ",
              "mimeType": "image/jpeg",
              "path": "images/y26fxi1c/production/9ab49bf6722ad91dc897daa32c0ae0a98aae7936-440x444.jpg",
              "_type": "sanity.imageAsset",
              "sha1hash": "9ab49bf6722ad91dc897daa32c0ae0a98aae7936"
            },
            "_type": "image"
          }
        ],
        "slug": {
          "_type": "slug",
          "current": "successful-back-to-school-dental-checkups"
        },
        "publishedAt": "2023-01-09T22:11:00.000Z"
      },
      {
        "publishedAt": "2023-01-09T22:11:00.000Z",
        "mainImage": {
          "asset": {
            "assetId": "20749af0ddae9167281921694da6bfbc0e0a2838",
            "path": "images/y26fxi1c/production/20749af0ddae9167281921694da6bfbc0e0a2838-1080x608.jpg",
            "_rev": "wEG01ZVtTimObULAv1EF0a",
            "extension": "jpg",
            "_createdAt": "2023-01-09T21:23:28Z",
            "size": 51374,
            "_id": "image-20749af0ddae9167281921694da6bfbc0e0a2838-1080x608-jpg",
            "sha1hash": "20749af0ddae9167281921694da6bfbc0e0a2838",
            "metadata": {
              "_type": "sanity.imageMetadata",
              "palette": {
                "muted": {
                  "title": "#fff",
                  "population": 0.45,
                  "background": "#6c7e97",
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#fff"
                },
                "lightVibrant": {
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#000",
                  "title": "#fff",
                  "population": 0.02,
                  "background": "#eca47c"
                },
                "darkVibrant": {
                  "title": "#fff",
                  "population": 2.76,
                  "background": "#7b4438",
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#fff"
                },
                "lightMuted": {
                  "population": 0.86,
                  "background": "#d6b1a4",
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#000",
                  "title": "#fff"
                },
                "vibrant": {
                  "population": 3.06,
                  "background": "#b4734e",
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#fff",
                  "title": "#fff"
                },
                "dominant": {
                  "title": "#fff",
                  "population": 3.06,
                  "background": "#b4734e",
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#fff"
                },
                "_type": "sanity.imagePalette",
                "darkMuted": {
                  "background": "#693a2f",
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#fff",
                  "title": "#fff",
                  "population": 0
                }
              },
              "hasAlpha": false,
              "lqip": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAALABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAcEBQYI/8QAIRAAAgICAQUBAQAAAAAAAAAAAQIDBAARIQUGEiJBFCP/xAAXAQADAQAAAAAAAAAAAAAAAAAAAgME/8QAGxEAAgIDAQAAAAAAAAAAAAAAAQIAAwQTMSL/2gAMAwEAAhEDEQA/AOkr9iGn0ib8ZX0X1GLruf8ApdrzSIrvMniVD65+cYxuuxJH0eyEUKPH4Mwz14Z7kLTRq5XWifmRtUuSomjHYJ6MjWO4pqDLWehKxRQNjkYZYzqGlbYB1xhhruHGj7KT1J//2Q==",
              "dimensions": {
                "width": 1080,
                "aspectRatio": 1.7763157894736843,
                "height": 608,
                "_type": "sanity.imageDimensions"
              },
              "isOpaque": true,
              "blurHash": "MnP?UH?wyDRPS5xtoff6V?kCkqenkCV?WC"
            },
            "originalFilename": "640 (13).jpeg",
            "_updatedAt": "2023-01-09T21:23:28Z",
            "_type": "sanity.imageAsset",
            "url": "https://cdn.sanity.io/images/y26fxi1c/production/20749af0ddae9167281921694da6bfbc0e0a2838-1080x608.jpg",
            "uploadId": "QjTDmO9J5DqK1uEXmaTvWffuecmOHHV6",
            "mimeType": "image/jpeg"
          }
        },
        "title": "牙线真的有必要吗？",
        "body": [
          {
            "_type": "block",
            "style": "normal",
            "_key": "9d8716083628",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "使用牙线？但是我已经一天刷两次牙了。还不够吗？嗯……不，不是刷牙的次数不够。我们将解释原因。",
                "_key": "46f294142d800"
              }
            ]
          },
          {
            "children": [
              {
                "text": "每天用含氟牙膏刷牙两次已经是一个好的开始，但定期刷牙可能不足以清除牙齿间的食物残渣、牙菌斑和细菌。",
                "_key": "4a08c8e7b78d0",
                "_type": "span",
                "marks": []
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "8908fd5e7e7c",
            "markDefs": []
          },
          {
            "markDefs": [],
            "children": [
              {
                "marks": [],
                "text": "",
                "_key": "8b517b8df82b0",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "1cbf54d0a42d"
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "4cf92ba8bbec",
            "markDefs": [],
            "children": [
              {
                "_key": "437ba1d2d69f0",
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "为什么要使用牙线？"
              }
            ]
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "7e2b0c3dace5",
            "markDefs": [],
            "children": [
              {
                "text": "",
                "_key": "01efd32565410",
                "_type": "span",
                "marks": []
              }
            ]
          },
          {
            "_type": "image",
            "_key": "3605488e8652",
            "asset": {
              "_id": "image-f0e1ed1df59fe6a709ba99fff0b3940b7f0fa632-1080x608-jpg",
              "sha1hash": "f0e1ed1df59fe6a709ba99fff0b3940b7f0fa632",
              "originalFilename": "640 (14).jpeg",
              "size": 60777,
              "_rev": "wEG01ZVtTimObULAv1EH6R",
              "_createdAt": "2023-01-09T21:24:00Z",
              "_updatedAt": "2023-01-09T21:24:00Z",
              "_type": "sanity.imageAsset",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/f0e1ed1df59fe6a709ba99fff0b3940b7f0fa632-1080x608.jpg",
              "uploadId": "Y0guDrqV9pGduHqEvOq2kN2r3Bk2Xsd0",
              "metadata": {
                "isOpaque": true,
                "blurHash": "MAN^M9~o00-SWX54^jxcJB?b0Jxwo$D#x]",
                "_type": "sanity.imageMetadata",
                "palette": {
                  "muted": {
                    "title": "#fff",
                    "population": 9.83,
                    "background": "#af9e78",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000"
                  },
                  "lightVibrant": {
                    "foreground": "#000",
                    "title": "#000",
                    "population": 0.19,
                    "background": "#dae4b6",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "darkVibrant": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0,
                    "background": "#536023",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "lightMuted": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#000",
                    "population": 11.68,
                    "background": "#d4cebb"
                  },
                  "vibrant": {
                    "background": "#a0ba44",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 0
                  },
                  "dominant": {
                    "background": "#d4cebb",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#000",
                    "population": 11.68
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "background": "#474b29",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 5.24
                  }
                },
                "hasAlpha": false,
                "lqip": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAALABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAIEBQYH/8QAJBAAAQMEAgAHAAAAAAAAAAAAAQIDEQAEBSEGEhMiIzFBYYH/xAAXAQADAQAAAAAAAAAAAAAAAAAAAgME/8QAGREBAAIDAAAAAAAAAAAAAAAAAQACAxES/9oADAMBAAIRAxEAPwDsjdv3cMvOKkyBMRS5fDWGU9F4FThSU9grST90vHVFy8WFkmDqascgA1kGvDAT3X5oHvWRAr0ktWvTqYVvG5jFoFnbZgtMtaSnoDr9oqPzcRyK4gkaHyaKVyI6gYxn/9k=",
                "dimensions": {
                  "_type": "sanity.imageDimensions",
                  "width": 1080,
                  "aspectRatio": 1.7763157894736843,
                  "height": 608
                }
              },
              "extension": "jpg",
              "mimeType": "image/jpeg",
              "path": "images/y26fxi1c/production/f0e1ed1df59fe6a709ba99fff0b3940b7f0fa632-1080x608.jpg",
              "assetId": "f0e1ed1df59fe6a709ba99fff0b3940b7f0fa632"
            }
          },
          {
            "style": "normal",
            "_key": "d902e8f89a02",
            "markDefs": [],
            "children": [
              {
                "text": "如果您每天刷牙两次，但不使用牙线，",
                "_key": "080f3b6c5b8b0",
                "_type": "span",
                "marks": []
              },
              {
                "_key": "080f3b6c5b8b1",
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "那么简单的事实就是多达 40% 的牙齿部分没有被清洁到"
              },
              {
                "_type": "span",
                "marks": [],
                "text": "。不使用牙线刷牙就像跳进淋浴间只洗一个腋窝！",
                "_key": "080f3b6c5b8b2"
              }
            ],
            "_type": "block"
          },
          {
            "_key": "07d89dbb66b2",
            "markDefs": [],
            "children": [
              {
                "marks": [],
                "text": "",
                "_key": "4a8372dd367b0",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "4307081b3c8b",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "“",
                "_key": "cd6fe22de61d0"
              },
              {
                "text": "需要使用牙线去除牙齿之间的细菌和食物，这是牙刷刷毛根本无法触及的区域，",
                "_key": "cd6fe22de61d1",
                "_type": "span",
                "marks": [
                  "em"
                ]
              },
              {
                "marks": [],
                "text": "”",
                "_key": "cd6fe22de61d2",
                "_type": "span"
              },
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "郑医生说",
                "_key": "cd6fe22de61d3"
              },
              {
                "_key": "cd6fe22de61d4",
                "_type": "span",
                "marks": [],
                "text": "。"
              }
            ]
          },
          {
            "style": "normal",
            "_key": "c22e249824d7",
            "markDefs": [],
            "children": [
              {
                "_key": "0eac58cfa7900",
                "_type": "span",
                "marks": [],
                "text": "需要使用牙线清洁牙齿之间和牙龈下方的食物、牙菌斑和细菌。"
              },
              {
                "marks": [
                  "strong"
                ],
                "text": "如果“不使用牙线”，食物将开始发酵和分解，导致口臭。更不用说，残留的细菌会导致蛀牙，并且会增加您患牙龈疾病的风险。",
                "_key": "0eac58cfa7901",
                "_type": "span"
              },
              {
                "_type": "span",
                "marks": [],
                "text": "而且不幸的是即使是最高档的牙刷也无法深入到牙齿之间。",
                "_key": "0eac58cfa7902"
              }
            ],
            "_type": "block"
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "35a6b903748c",
            "markDefs": [],
            "children": [
              {
                "_key": "9c671866d8ac0",
                "_type": "span",
                "marks": [],
                "text": "不要认为用漱口水冲洗它会充分取代牙线。斑块细菌具有粘性，因此需要手动清除。当牙菌斑和食物残渣聚集在牙齿之间时，您的牙齿患蛀牙的风险要高得多。除此之外，您还有患牙龈疾病的风险。"
              },
              {
                "text": "在晚期，牙龈疾病会导致牙齿松动或导致牙齿甚至骨质流失。",
                "_key": "9c671866d8ac1",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              }
            ]
          },
          {
            "children": [
              {
                "_key": "b6841a1d55e90",
                "_type": "span",
                "marks": [],
                "text": "这不是您想要的，"
              },
              {
                "text": "好消息是这些问题完全可以通过正确刷牙和使用牙线来预防。",
                "_key": "b6841a1d55e91",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "66268f915673",
            "markDefs": []
          },
          {
            "_key": "3b765cfd946d",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "",
                "_key": "49ef86df9d760"
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "children": [
              {
                "marks": [
                  "strong"
                ],
                "text": "“我只是似乎做不到。”",
                "_key": "6dec449d5f290",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "934ebf769e92",
            "markDefs": []
          },
          {
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "",
                "_key": "3b7ce9a33cd40"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "7a4c13e42adc"
          },
          {
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "患者反馈说不用牙线单纯是因为牙线不易操作。",
                "_key": "77df0791537e0"
              },
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "有些人会觉得自己用牙线在手指上绕来绕去掰扯不明白，具有挑战性",
                "_key": "77df0791537e1"
              },
              {
                "_type": "span",
                "marks": [],
                "text": "。如果这是您的情况，我们的诊所提供牙线替代品，您可能会发现它们更易接受。",
                "_key": "77df0791537e2"
              },
              {
                "_key": "77df0791537e3",
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "小“Y”形的牙线棒"
              },
              {
                "_key": "77df0791537e4",
                "_type": "span",
                "marks": [],
                "text": "，尖端之间有一根牙线，只要把线塞进牙缝里就可以开始清洁了！"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "e5dfcd11198d"
          },
          {
            "style": "normal",
            "_key": "83c4ae61c2fc",
            "markDefs": [],
            "children": [
              {
                "text": "",
                "_key": "26bd26a557fd0",
                "_type": "span",
                "marks": []
              }
            ],
            "_type": "block"
          },
          {
            "_type": "image",
            "_key": "a7a42edc6369",
            "asset": {
              "metadata": {
                "hasAlpha": false,
                "lqip": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGwABAAEFAQAAAAAAAAAAAAAAAAUBAgMEBgj/xAAkEAACAQQCAgEFAAAAAAAAAAABAgMABAURBhIhMRMVIkFRgf/EABcBAAMBAAAAAAAAAAAAAAAAAAABBAP/xAAaEQEAAwEBAQAAAAAAAAAAAAABAAIREgMx/9oADAMBAAIRAxEAPwD0XyTPjC9GaCWYN41GN6qPuOQzw4D6xJDKYEfs0QXThK5fmHIZcVyy6jmAlteqERn3v9ip7jmUiz/HcmoXanY0R40R6qd9elofZG+vbapbGdFx6+fKYuK9CsiTbdFf2F/FK28TEIcbbRqNBYwAP5StqjhspoPJv2Uu8XY3cnyXVpDK/rs6gmrVtbezjEVrBHFG5+5VXW6UpoR8m7kzxuQoAAAHilKURz//2Q==",
                "dimensions": {
                  "_type": "sanity.imageDimensions",
                  "width": 713,
                  "aspectRatio": 0.9944211994421199,
                  "height": 717
                },
                "isOpaque": true,
                "blurHash": "eOQJ+KM{?b^,?I%3%3RiNFof~X%3NFInInbXE0xbxbNG~Dt7IUInR%",
                "_type": "sanity.imageMetadata",
                "palette": {
                  "lightVibrant": {
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 0.01,
                    "background": "#70dc5e",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "darkVibrant": {
                    "title": "#fff",
                    "population": 0.93,
                    "background": "#118e0a",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "lightMuted": {
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 3.34,
                    "background": "#86bc85",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "vibrant": {
                    "population": 3.2,
                    "background": "#0a922b",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff"
                  },
                  "dominant": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 3.59,
                    "background": "#72aa59",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "background": "#489944",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 1.9
                  },
                  "muted": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 3.59,
                    "background": "#72aa59"
                  }
                }
              },
              "assetId": "c386a7be6c00b701c7d50a9afc511cf61e5dde5e",
              "sha1hash": "c386a7be6c00b701c7d50a9afc511cf61e5dde5e",
              "_type": "sanity.imageAsset",
              "uploadId": "uIj7qJ4c6quu9zo0kC8g9NB4qM55DsNP",
              "_updatedAt": "2023-01-09T21:25:25Z",
              "path": "images/y26fxi1c/production/c386a7be6c00b701c7d50a9afc511cf61e5dde5e-713x717.jpg",
              "extension": "jpg",
              "_rev": "9Sh1niKpid77KkNKMp7Amn",
              "originalFilename": "640 (15).jpeg",
              "_createdAt": "2023-01-09T21:25:25Z",
              "size": 34536,
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/c386a7be6c00b701c7d50a9afc511cf61e5dde5e-713x717.jpg",
              "_id": "image-c386a7be6c00b701c7d50a9afc511cf61e5dde5e-713x717-jpg",
              "mimeType": "image/jpeg"
            }
          },
          {
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "“我这样做的时候会痛，我的牙龈会流血，所以我不用牙线。”",
                "_key": "5212117f1bf20"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "87523e9f5991"
          },
          {
            "_key": "d0fe737d28f8",
            "markDefs": [],
            "children": [
              {
                "text": "",
                "_key": "04f38e04ac430",
                "_type": "span",
                "marks": []
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "_key": "63d1a4706262",
            "asset": {
              "extension": "jpg",
              "path": "images/y26fxi1c/production/06429695a0632a14167ceeda98ec76b19659555b-1080x608.jpg",
              "size": 58445,
              "_id": "image-06429695a0632a14167ceeda98ec76b19659555b-1080x608-jpg",
              "mimeType": "image/jpeg",
              "assetId": "06429695a0632a14167ceeda98ec76b19659555b",
              "originalFilename": "640 (16).jpeg",
              "_createdAt": "2023-01-09T21:27:04Z",
              "_type": "sanity.imageAsset",
              "sha1hash": "06429695a0632a14167ceeda98ec76b19659555b",
              "_updatedAt": "2023-01-09T21:27:04Z",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/06429695a0632a14167ceeda98ec76b19659555b-1080x608.jpg",
              "metadata": {
                "_type": "sanity.imageMetadata",
                "palette": {
                  "darkVibrant": {
                    "population": 0.28,
                    "background": "#9e1531",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff"
                  },
                  "lightMuted": {
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 2.77,
                    "background": "#c6949e",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "vibrant": {
                    "title": "#fff",
                    "population": 0.23,
                    "background": "#a31620",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "dominant": {
                    "population": 2.77,
                    "background": "#c6949e",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff"
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "title": "#fff",
                    "population": 0,
                    "background": "#871129",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "muted": {
                    "population": 0.21,
                    "background": "#a75f66",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff"
                  },
                  "lightVibrant": {
                    "title": "#fff",
                    "population": 0.35,
                    "background": "#ea96a3",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000"
                  }
                },
                "hasAlpha": false,
                "lqip": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAALABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQCBQYH/8QAIBAAAgEEAgMBAAAAAAAAAAAAAQIDAAQRIQUSEyMxQf/EABYBAQEBAAAAAAAAAAAAAAAAAAECA//EABgRAAMBAQAAAAAAAAAAAAAAAAABAhEh/9oADAMBAAIRAxEAPwDut/zqW3LwWjNjyN0Ax9Nae3nWJQr5yT+Cq2e1gknWV4kaRdhiNg05AcxZP2jppTlpYhn1ZJ6tvdFQUkDRopJw/9k=",
                "dimensions": {
                  "_type": "sanity.imageDimensions",
                  "width": 1080,
                  "aspectRatio": 1.7763157894736843,
                  "height": 608
                },
                "isOpaque": true,
                "blurHash": "MDRyZ_00i{_N%~?vofWBt6RP%~%zbaaKMd"
              },
              "uploadId": "p7fxrPIn3ElXUY19FE6UEZ6sLcZwdPI4",
              "_rev": "wEG01ZVtTimObULAv1ET45"
            },
            "_type": "image"
          },
          {
            "_key": "85bf42a819b3",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "人们不使用牙线的第二个原因是，使用牙线会导致牙龈出血。",
                "_key": "01099eee3f0d0"
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "5eb75744a037",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "这种情况呢，",
                "_key": "7622ac39b8540"
              },
              {
                "_key": "7622ac39b8541",
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "即使流血，还是需要继续使用牙线。"
              }
            ]
          },
          {
            "children": [
              {
                "marks": [],
                "text": "因为健康的牙龈通常不会流血。在几乎所有情况下，",
                "_key": "61068c1919fd0",
                "_type": "span"
              },
              {
                "text": "牙龈出血表明某种程度的牙龈感染",
                "_key": "61068c1919fd1",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              },
              {
                "marks": [],
                "text": "。但要记住的重要一点是，出血是身体的愈合机制，经过几天的持续使用牙线，出血应该会消退。",
                "_key": "61068c1919fd2",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "bc4b13c1fe05",
            "markDefs": []
          },
          {
            "markDefs": [],
            "children": [
              {
                "text": "如果牙龈出血没有好转，您真的需要与您的牙医预约，看看您是否需要进一步的牙龈治疗",
                "_key": "601782578b040",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              },
              {
                "text": "。",
                "_key": "601782578b041",
                "_type": "span",
                "marks": []
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "570e53a29d00"
          },
          {
            "_key": "d06ca554eaa9",
            "markDefs": [],
            "children": [
              {
                "_key": "f663065ee98a0",
                "_type": "span",
                "marks": [],
                "text": ""
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "style": "normal",
            "_key": "cb2c2940c468",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "“我就是无法使用牙线”",
                "_key": "a4e72b3f067a0"
              }
            ],
            "_type": "block"
          },
          {
            "markDefs": [],
            "children": [
              {
                "marks": [],
                "text": "",
                "_key": "6c65304ed0080",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "c57afad79dd9"
          },
          {
            "_type": "image",
            "_key": "78cca07989dc",
            "asset": {
              "_type": "sanity.imageAsset",
              "size": 34689,
              "uploadId": "uaQcwWjubZlfeAZKlqKRzjGqikGovJI3",
              "assetId": "74620c921b5ef965ee2a6f5c2d06b97e36542a51",
              "_createdAt": "2023-01-09T21:27:34Z",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/74620c921b5ef965ee2a6f5c2d06b97e36542a51-1080x608.jpg",
              "mimeType": "image/jpeg",
              "_updatedAt": "2023-01-09T21:27:34Z",
              "path": "images/y26fxi1c/production/74620c921b5ef965ee2a6f5c2d06b97e36542a51-1080x608.jpg",
              "metadata": {
                "isOpaque": true,
                "blurHash": "MbLpW?~o%LRPMyV@j[ofWBa#aeWBkCflWC",
                "_type": "sanity.imageMetadata",
                "palette": {
                  "muted": {
                    "population": 0.03,
                    "background": "#a88454",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff"
                  },
                  "lightVibrant": {
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 27.11,
                    "background": "#dcc49c",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "darkVibrant": {
                    "population": 0.01,
                    "background": "#9c6424",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff"
                  },
                  "lightMuted": {
                    "background": "#d7c1a4",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 0.59
                  },
                  "vibrant": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 26.62,
                    "background": "#9c6b3b"
                  },
                  "dominant": {
                    "population": 27.11,
                    "background": "#dcc49c",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff"
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.55,
                    "background": "#826446"
                  }
                },
                "hasAlpha": false,
                "lqip": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABwACA//EACMQAAEDAwIHAAAAAAAAAAAAAAEAAgMEESESIhM0UXKCobH/xAAWAQEBAQAAAAAAAAAAAAAAAAAFAgP/xAAZEQADAAMAAAAAAAAAAAAAAAAAARECAyH/2gAMAwEAAhEDEQA/AFqWMCln042EoirKWeCos+PLtwAzhMM/Jzdp+IhNZURte1krgNRHtBZJRUW03pg8UnNPbxUuL55Xuu6RxPW6lFN4f//Z",
                "dimensions": {
                  "height": 608,
                  "_type": "sanity.imageDimensions",
                  "width": 1080,
                  "aspectRatio": 1.7763157894736843
                }
              },
              "extension": "jpg",
              "_rev": "3q3ySoeGye0Syz1GmBOU7r",
              "originalFilename": "640 (17).jpeg",
              "_id": "image-74620c921b5ef965ee2a6f5c2d06b97e36542a51-1080x608-jpg",
              "sha1hash": "74620c921b5ef965ee2a6f5c2d06b97e36542a51"
            }
          },
          {
            "style": "normal",
            "_key": "cb2dc07743b5",
            "markDefs": [],
            "children": [
              {
                "_key": "9ac7b57b5fd70",
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "别担心，我们可以为您提供一些牙线替代品。"
              }
            ],
            "_type": "block"
          },
          {
            "children": [
              {
                "text": "",
                "_key": "86f8e7c71cda0",
                "_type": "span",
                "marks": []
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "2323a867a3fe",
            "markDefs": []
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "f6f0f16c753d",
            "markDefs": [],
            "children": [
              {
                "marks": [],
                "text": "多亏了现代技术，如果您不喜欢传统的牙线，",
                "_key": "382916e85bba0",
                "_type": "span"
              },
              {
                "marks": [
                  "strong"
                ],
                "text": "请考虑使用水牙线",
                "_key": "382916e85bba1",
                "_type": "span"
              },
              {
                "_key": "382916e85bba2",
                "_type": "span",
                "marks": [],
                "text": "。这些奇妙的小机器可在我们的诊所买到。它们是可充电的机器，带有一个可以在盆中填充的圆柱体和一个可以在牙齿之间喷射水的薄高压喷嘴。(400-800 RMB)"
              }
            ]
          },
          {
            "markDefs": [],
            "children": [
              {
                "marks": [],
                "text": "",
                "_key": "9b024931977b0",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "e3798b3b8bc3"
          },
          {
            "asset": {
              "extension": "jpg",
              "mimeType": "image/jpeg",
              "metadata": {
                "isOpaque": true,
                "blurHash": "MKO49xE0MJxwEK?wxaS%VtRQXStRM{WCjD",
                "_type": "sanity.imageMetadata",
                "palette": {
                  "muted": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 1.51,
                    "background": "#a48f5f"
                  },
                  "lightVibrant": {
                    "title": "#fff",
                    "population": 0.22,
                    "background": "#8fdeb4",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000"
                  },
                  "darkVibrant": {
                    "population": 0.33,
                    "background": "#1d7626",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff"
                  },
                  "lightMuted": {
                    "title": "#fff",
                    "population": 1.45,
                    "background": "#d3b7b2",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000"
                  },
                  "vibrant": {
                    "population": 0.01,
                    "background": "#e0649c",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff"
                  },
                  "dominant": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 1.51,
                    "background": "#a48f5f",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "background": "#402625",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.5
                  }
                },
                "hasAlpha": false,
                "lqip": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAALABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAUGBAf/xAAjEAACAQMDBAMAAAAAAAAAAAABAgMABBEFEiEGEyIxI0Fh/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwEE/8QAGREAAwEBAQAAAAAAAAAAAAAAAAERBAJh/9oADAMBAAIRAxEAPwDsdtqMcGmQWuWiZiPIDOaZ2d1JLC52sscYw2DnmpLQvn6t7E3nCg3Kh9A4p5bzSI94EYgMeRU5t9DcTRthRZFZvR3HIJoqVFxKs9wBIwAkP3+CijeiOQ2LLVaf/9k=",
                "dimensions": {
                  "aspectRatio": 1.7763157894736843,
                  "height": 608,
                  "_type": "sanity.imageDimensions",
                  "width": 1080
                }
              },
              "_type": "sanity.imageAsset",
              "_updatedAt": "2023-01-09T21:28:09Z",
              "path": "images/y26fxi1c/production/2d193bd226f3e3adb29bee45ae0382ef772deb45-1080x608.jpg",
              "uploadId": "xfcX5Nl2c42Tbv2WCe1Kgs7VrroQFavX",
              "_rev": "9Sh1niKpid77KkNKMp7Nsf",
              "assetId": "2d193bd226f3e3adb29bee45ae0382ef772deb45",
              "_createdAt": "2023-01-09T21:28:09Z",
              "originalFilename": "640 (18).jpeg",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/2d193bd226f3e3adb29bee45ae0382ef772deb45-1080x608.jpg",
              "_id": "image-2d193bd226f3e3adb29bee45ae0382ef772deb45-1080x608-jpg",
              "size": 90910,
              "sha1hash": "2d193bd226f3e3adb29bee45ae0382ef772deb45"
            },
            "_type": "image",
            "_key": "02f415506a4f"
          },
          {
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "或者，您可以选择“",
                "_key": "77ae5052c70d0"
              },
              {
                "marks": [
                  "strong"
                ],
                "text": "手柄上的牙线",
                "_key": "77ae5052c70d1",
                "_type": "span"
              },
              {
                "marks": [],
                "text": "”或现代软硅胶牙签。虽然它们可能不适用于非常紧密的牙齿或间隙非常大的牙齿，但它们是一些人更喜欢的清洁牙齿间缝隙的方式。",
                "_key": "77ae5052c70d2",
                "_type": "span"
              },
              {
                "_type": "span",
                "marks": [
                  "em"
                ],
                "text": "(30-70 RMB)",
                "_key": "77ae5052c70d3"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "829f2480341b",
            "markDefs": []
          },
          {
            "style": "normal",
            "_key": "4841a716d570",
            "markDefs": [],
            "children": [
              {
                "text": "",
                "_key": "d2296ef2841c0",
                "_type": "span",
                "marks": []
              }
            ],
            "_type": "block"
          },
          {
            "_key": "3a5e8142a7bb",
            "markDefs": [],
            "children": [
              {
                "marks": [
                  "strong"
                ],
                "text": "所以现在......如何使用牙线？",
                "_key": "e490aecef08c0",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "children": [
              {
                "text": "",
                "_key": "0446f0a2403d0",
                "_type": "span",
                "marks": []
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "13978ee37494",
            "markDefs": []
          },
          {
            "_type": "image",
            "_key": "c961adb41805",
            "asset": {
              "assetId": "cdff46e7515f72d32e8d9c673617579e1911cb18",
              "_createdAt": "2023-01-09T21:29:22Z",
              "sha1hash": "cdff46e7515f72d32e8d9c673617579e1911cb18",
              "originalFilename": "640 (19).jpeg",
              "_type": "sanity.imageAsset",
              "size": 49701,
              "extension": "jpg",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/cdff46e7515f72d32e8d9c673617579e1911cb18-1080x608.jpg",
              "_id": "image-cdff46e7515f72d32e8d9c673617579e1911cb18-1080x608-jpg",
              "_rev": "3q3ySoeGye0Syz1GmBOsCY",
              "metadata": {
                "dimensions": {
                  "height": 608,
                  "_type": "sanity.imageDimensions",
                  "width": 1080,
                  "aspectRatio": 1.7763157894736843
                },
                "isOpaque": true,
                "blurHash": "MSQAXC~TxXI=RQ-Vw{spS1n+NGWVaebHWB",
                "_type": "sanity.imageMetadata",
                "palette": {
                  "dominant": {
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 3.92,
                    "background": "#10e5e3",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.17,
                    "background": "#585a5b",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "muted": {
                    "background": "#84727b",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.13
                  },
                  "lightVibrant": {
                    "title": "#000",
                    "population": 3.52,
                    "background": "#8ee4e9",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000"
                  },
                  "darkVibrant": {
                    "title": "#fff",
                    "population": 0.03,
                    "background": "#45729e",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "lightMuted": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 0.28,
                    "background": "#c4acbe"
                  },
                  "vibrant": {
                    "background": "#10e5e3",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 3.92
                  }
                },
                "hasAlpha": false,
                "lqip": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAYCBQj/xAAhEAACAgIBBAMAAAAAAAAAAAABAgADESEEBRITUSIxQf/EABYBAQEBAAAAAAAAAAAAAAAAAAQAAv/EABwRAAICAgMAAAAAAAAAAAAAAAABAhEDIRKB8P/aAAwDAQACEQMRAD8A1HWagGFbA+9xb5Sr5W7Rj5ZGJfV0VK7MqAH3F+3fIGSfs/sRiW9A8zcklJE+1SBo6GIRX65zuTT1BkqudVwNCE25JFHnSqvdH//Z"
              },
              "uploadId": "tj0lZ6XFBVi2U0bwt7PhsdjqObFqMKpk",
              "_updatedAt": "2023-01-09T21:29:22Z",
              "path": "images/y26fxi1c/production/cdff46e7515f72d32e8d9c673617579e1911cb18-1080x608.jpg",
              "mimeType": "image/jpeg"
            }
          },
          {
            "_key": "eb00a2b5b2db",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "虽然我们希望您每天刷两次，但每天使用一次牙线就足够了。如果可能，我们通常鼓励您在夜间刷牙时使用牙线。",
                "_key": "95af2ef429280"
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "84c8353f18c4",
            "markDefs": [],
            "children": [
              {
                "_key": "fcbb72a6e98f0",
                "_type": "span",
                "marks": [],
                "text": ""
              }
            ]
          },
          {
            "_key": "0b6e629778f8",
            "asset": {
              "size": 74511,
              "assetId": "addbcd82ea21b4986fb051555502050b2d92c1f6",
              "_updatedAt": "2023-01-09T21:30:55Z",
              "extension": "jpg",
              "metadata": {
                "lqip": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUCCP/EAB4QAAICAgMBAQAAAAAAAAAAAAEDAAIEERIhMQUT/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgED/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQASAv/aAAwDAQACEQMRAD8A6Lx6MH0HM/a5oQdDUYaHJTklrr6v4deSgix4MO++U1S9rAix2I9LZ5Cm4QapPEvseyR1uJbUBwHQiTUjm//Z",
                "dimensions": {
                  "_type": "sanity.imageDimensions",
                  "width": 1080,
                  "aspectRatio": 1.7763157894736843,
                  "height": 608
                },
                "isOpaque": true,
                "blurHash": "M6Q^2RtmIA-;EN05T0xGxuEN.TNaxaRPNb",
                "_type": "sanity.imageMetadata",
                "palette": {
                  "dominant": {
                    "population": 5.64,
                    "background": "#aedbf6",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#000"
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0,
                    "background": "#0f5b89",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "muted": {
                    "background": "#70848d",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.61
                  },
                  "lightVibrant": {
                    "background": "#aedbf6",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#000",
                    "population": 5.64
                  },
                  "darkVibrant": {
                    "population": 0,
                    "background": "#0d4f77",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff"
                  },
                  "lightMuted": {
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 2.43,
                    "background": "#d9bdb6",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "vibrant": {
                    "background": "#1998e5",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0
                  }
                },
                "hasAlpha": false
              },
              "mimeType": "image/jpeg",
              "_rev": "3q3ySoeGye0Syz1GmBPCVs",
              "_createdAt": "2023-01-09T21:30:55Z",
              "_id": "image-addbcd82ea21b4986fb051555502050b2d92c1f6-1080x608-jpg",
              "_type": "sanity.imageAsset",
              "sha1hash": "addbcd82ea21b4986fb051555502050b2d92c1f6",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/addbcd82ea21b4986fb051555502050b2d92c1f6-1080x608.jpg",
              "path": "images/y26fxi1c/production/addbcd82ea21b4986fb051555502050b2d92c1f6-1080x608.jpg",
              "uploadId": "Hp9y2PrwBK83Amns6k3hftiVjBv0yDQR",
              "originalFilename": "640 (20).jpeg"
            },
            "_type": "image"
          },
          {
            "style": "normal",
            "_key": "103122707696",
            "markDefs": [],
            "children": [
              {
                "text": "请记住，您的牙齿和牙龈（爆米花进入的地方）之间有一点缝隙——重要的是轻轻地将牙线滑到牙龈线下方以进行深层清洁，即使它一开始就流血了。",
                "_key": "967cf60bdc750",
                "_type": "span",
                "marks": []
              }
            ],
            "_type": "block"
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "e67aa11c9cf9",
            "markDefs": [],
            "children": [
              {
                "marks": [
                  "strong"
                ],
                "text": "“要正确使用牙线，你需要将牙线以‘C’字形缠绕在牙齿上，然后将其移至牙龈线下方，然后轻轻地向后移动，”郑医生告诉我们。您会想在每颗牙齿上重复这个，包括你后牙的背面。”",
                "_key": "dc5a37bbfc580",
                "_type": "span"
              }
            ]
          },
          {
            "style": "normal",
            "_key": "71ad37086542",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "正确使用牙线的一个好方法是观看下面这个 1 分钟的演示视频，以确保您使用的是正确的方法。https://youtu.be/-_55NJmF8us?t=18",
                "_key": "377431cc10270"
              }
            ],
            "_type": "block"
          },
          {
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "请记住，您可以随时随地使用牙线！",
                "_key": "8b46bfdae6d50"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "602453ee123b",
            "markDefs": []
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "764fa6cab8d3",
            "markDefs": [],
            "children": [
              {
                "_key": "d606fa29bf900",
                "_type": "span",
                "marks": [],
                "text": ""
              }
            ]
          },
          {
            "asset": {
              "assetId": "6a3ebfb62af9c1174d38a4a29e31869e91170be9",
              "path": "images/y26fxi1c/production/6a3ebfb62af9c1174d38a4a29e31869e91170be9-1080x608.jpg",
              "metadata": {
                "_type": "sanity.imageMetadata",
                "palette": {
                  "vibrant": {
                    "background": "#ce2e43",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.06
                  },
                  "dominant": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.19,
                    "background": "#2d2317"
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.19,
                    "background": "#2d2317",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "muted": {
                    "population": 0.11,
                    "background": "#98594d",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff"
                  },
                  "lightVibrant": {
                    "population": 0.01,
                    "background": "#a4c4dc",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff"
                  },
                  "darkVibrant": {
                    "background": "#6c1823",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0
                  },
                  "lightMuted": {
                    "title": "#fff",
                    "population": 0.03,
                    "background": "#accccf",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000"
                  }
                },
                "hasAlpha": false,
                "lqip": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAALABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMCBAUI/8QAIRAAAgEEAgIDAAAAAAAAAAAAAQIDAAQREgUxBhMhkaH/xAAVAQEBAAAAAAAAAAAAAAAAAAACAf/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwDoP37bKUXvok09Ed0ljUGMuuNlPyKm6LuTj9p9uo9g7+6oq3F2U9jaCBJZGUEkEnJorJ8h5G7tORMVvOyJqDgYoow6/9k=",
                "dimensions": {
                  "width": 1080,
                  "aspectRatio": 1.7763157894736843,
                  "height": 608,
                  "_type": "sanity.imageDimensions"
                },
                "isOpaque": true,
                "blurHash": "M4QmI:AIn2~qxaiv_NMwWA%N?F~WIU%2S4"
              },
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/6a3ebfb62af9c1174d38a4a29e31869e91170be9-1080x608.jpg",
              "mimeType": "image/jpeg",
              "_id": "image-6a3ebfb62af9c1174d38a4a29e31869e91170be9-1080x608-jpg",
              "size": 76282,
              "extension": "jpg",
              "_rev": "3q3ySoeGye0Syz1GmBPKXR",
              "_createdAt": "2023-01-09T21:31:32Z",
              "uploadId": "yS0DrdBAIGsBFsrtI3gVJQ6XkH1PZfzl",
              "_updatedAt": "2023-01-09T21:31:32Z",
              "sha1hash": "6a3ebfb62af9c1174d38a4a29e31869e91170be9",
              "_type": "sanity.imageAsset",
              "originalFilename": "640 (21).jpeg"
            },
            "_type": "image",
            "_key": "c0c1efec5f8b"
          },
          {
            "style": "normal",
            "_key": "84ee3734da99",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "确保每天刷两次，每次两分钟，然后用漱口水漱口，每天至少使用牙线一次。",
                "_key": "7b5c2e870f5c0"
              },
              {
                "text": "请记住，定期检查和清洁对您的健康也非常重要.",
                "_key": "7b5c2e870f5c1",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              },
              {
                "text": " 请联系我们以预约牙齿检查，或者如果您对正确使用牙线有任何疑问，也请联系我们。",
                "_key": "7b5c2e870f5c2",
                "_type": "span",
                "marks": []
              }
            ],
            "_type": "block"
          },
          {
            "markDefs": [],
            "children": [
              {
                "marks": [],
                "text": "",
                "_key": "15052035b3fe",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "5436b4fd91a8"
          },
          {
            "asset": {
              "path": "images/y26fxi1c/production/9ab49bf6722ad91dc897daa32c0ae0a98aae7936-440x444.jpg",
              "_type": "sanity.imageAsset",
              "size": 42572,
              "_createdAt": "2023-01-06T11:31:11Z",
              "mimeType": "image/jpeg",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/9ab49bf6722ad91dc897daa32c0ae0a98aae7936-440x444.jpg",
              "_rev": "qLNVIvT2xXiIXINTMgkutQ",
              "_id": "image-9ab49bf6722ad91dc897daa32c0ae0a98aae7936-440x444-jpg",
              "originalFilename": "640 (5).jpeg",
              "extension": "jpg",
              "uploadId": "UF7biKwfDI2DxWak5JgRbTXnIYueEnlX",
              "_updatedAt": "2023-01-06T11:31:11Z",
              "metadata": {
                "_type": "sanity.imageMetadata",
                "palette": {
                  "lightMuted": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 0.01,
                    "background": "#bcb4b5"
                  },
                  "vibrant": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0,
                    "background": "#86787a"
                  },
                  "dominant": {
                    "background": "#444444",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.61
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "population": 0.61,
                    "background": "#444444",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff"
                  },
                  "muted": {
                    "title": "#fff",
                    "population": 0,
                    "background": "#847c84",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "lightVibrant": {
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 0,
                    "background": "#c0b8b9",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "darkVibrant": {
                    "population": 0,
                    "background": "#463e3f",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff"
                  }
                },
                "hasAlpha": false,
                "lqip": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAQCAwUG/8QAKBAAAQMDAwMDBQAAAAAAAAAAAQIDBAAFEQYSIRNRYSIjQTEyQoGh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOzcojsudLbTcX8mQdm1ZBTjx2rF24yLE24pc555srDeFKKikkfbmtstbsXU7xhMkMuuK9Lh+pH5E/Arn6gvir/EU1JjRorMV7C+mMrWccEUFVqlyHopWy/KdSpRJPY9v1SrbIytdtZLJSsYAJCdvOKUHpLbpe3yptz6xfUFK5HU81PJ0VaG2faS8gqUMlKhz/KUoLm4SIG6PFWtDSTwOD8DxSlKD//Z",
                "dimensions": {
                  "_type": "sanity.imageDimensions",
                  "width": 440,
                  "aspectRatio": 0.990990990990991,
                  "height": 444
                },
                "isOpaque": true,
                "blurHash": "eBLN.4-;%Mj[~qofj[M{%MfQ-;M{xuxuD%RjM{%M%MWB~qRjD%oft7"
              },
              "assetId": "9ab49bf6722ad91dc897daa32c0ae0a98aae7936",
              "sha1hash": "9ab49bf6722ad91dc897daa32c0ae0a98aae7936"
            },
            "_type": "image",
            "_key": "e4926d154ac5"
          }
        ],
        "slug": {
          "current": "is-dental-floss-really-necessary",
          "_type": "slug"
        }
      },
      {
        "title": "酒后的口干舌燥",
        "body": [
          {
            "markDefs": [],
            "children": [
              {
                "_key": "e0ec48a51e43",
                "_type": "span",
                "marks": [],
                "text": "您是否曾在一夜的畅饮后醒来感觉嘴巴异常干燥？舌头粘在您的脸颊内侧或嘴巴上，此时您极度渴望灌下一大杯水？"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "53c0a00fc08c"
          },
          {
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "饮酒会导致口腔和舌头非常干燥和发粘。这种酒精引起的口干需要担心吗？还是酒后口干只是玩得太开心的极端结果？",
                "_key": "8a2278d7e600"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "6c459f86699c"
          },
          {
            "markDefs": [],
            "children": [
              {
                "_key": "3a256eaf4878",
                "_type": "span",
                "marks": [],
                "text": ""
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "792db9f29bad"
          },
          {
            "asset": {
              "_createdAt": "2023-01-09T21:10:41Z",
              "extension": "png",
              "assetId": "a037710af862cd63084a78480f923233a832dc37",
              "_updatedAt": "2023-01-09T21:10:41Z",
              "mimeType": "image/png",
              "path": "images/y26fxi1c/production/a037710af862cd63084a78480f923233a832dc37-507x338.png",
              "originalFilename": "640 (14).png",
              "uploadId": "CCtCJil090hGL80H2roYrJuKTIjDCzT1",
              "sha1hash": "a037710af862cd63084a78480f923233a832dc37",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/a037710af862cd63084a78480f923233a832dc37-507x338.png",
              "metadata": {
                "_type": "sanity.imageMetadata",
                "palette": {
                  "lightMuted": {
                    "title": "#fff",
                    "population": 1.48,
                    "background": "#cfb4b4",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000"
                  },
                  "vibrant": {
                    "title": "#fff",
                    "population": 0,
                    "background": "#ac4c54",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "dominant": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 9.48,
                    "background": "#926766",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 8.72,
                    "background": "#321d1c"
                  },
                  "muted": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 9.48,
                    "background": "#926766"
                  },
                  "lightVibrant": {
                    "foreground": "#000",
                    "title": "#000",
                    "population": 0.88,
                    "background": "#f1d0cd",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "darkVibrant": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0,
                    "background": "#5c1c0c"
                  }
                },
                "hasAlpha": true,
                "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADXElEQVQ4jS2Ne0+aBxSH308y061r1jRadXVttdaumW7dRW11m42xsYmtunrDCwIi4ASqXB3eKwKivvqCCKKiongBRbcu2lj3eZ6FN/3jyfM75yS/Iygf5KAszEaR/wUdOVkobmfJbsu9jqIwF1XZQwyVTzBWl2Oq/gXj0yfof3iEqrgAZdEd1N8WoSl9iOpxEcqSuwjm1y9xtTehL/+OjvzrtGVnoci/gaqsGEPdc2wtzbi1avwGLVPtzdjrfsNU8T2akm/ovp+LsriA3kf36C4uoON+HoK6pYX5sVFc3e0oSgr4I+9LVKVFWJoaMCoU6FvbGOnr451Bh625Ad2zn1CWlfDm7m3qb31O3c1r1N68Rs1XWfx+4zOE+qeVjJuMjOu1qGqe0flzKeZX9Uzo+lE3NfOivILG6mo6a5/TVlVB049lvCp7TF3xParys6nIu0V5fjblX+dQeScXoepBIeoXtVg6WnFqVEwaB/A7bMzZrJgVCtSNjQxrNIwNDjKi1+Ho78Np0OHU67DrtDgMOkYGBxg1DTL+1oTQXvMrhoaXTP+pZ2tZ5HR3h7PdHXZEEd/QEG6jkdWpKbZ8PjbcbmIeDwlR5CgQICkFSK+u8n57m/PDAy6SRwhh7ywb83McroXl5dXJMVepJO/X11n/y4W3p5fZ9k78im7ELiUhjY5Ns4X4sJ242cLR2CTn0ShXJyn+O0sjfDhOcpk+5jKV5HxrizNJIu3xkZ6eYd/qIKzUIL3pYKW1k7UeNbH+AbkoYXWQsDhITc9wHovx8STFx/QxwkXqiEzpxcE+f0ciHE6/Iz5sJWFzkpqYIjk5LZOe9fKPuMS/wRXOIxEuNje5iMX4EI9zmTySyzKlQmJpgX1JJBkKkgxKJLyz7ExNsOee4WhhnpS0xPFKgHQ4xGk0wmk0THotTDrjaETOqdUgh4ElDiURwaPqYq5fRcg+zPqESyY6PsLaqJOIyyE7M29MutiYHCXishOyD8msOi2yxUEdPk0PmS7BrerCq+1FspgIuxxERp2yV0dshBwWVuzDhJxWwi67/CCzC1jNBC1m+bZie8vioB6fthePphthwzPDhtdNzO9le8HPzuI8cfETn/Le8iIJaYm9DMuiTEISOQhKHKxIct4VF4gv+vkfjtOrnLHzjY8AAAAASUVORK5CYII=",
                "dimensions": {
                  "width": 507,
                  "aspectRatio": 1.5,
                  "height": 338,
                  "_type": "sanity.imageDimensions"
                },
                "isOpaque": true,
                "blurHash": "V6J%%+tRX-s:Xm00x]RPjF%g00%28w%L-;|Ht7tl%M%g"
              },
              "_id": "image-a037710af862cd63084a78480f923233a832dc37-507x338-png",
              "_type": "sanity.imageAsset",
              "size": 182686,
              "_rev": "wEG01ZVtTimObULAv1CxsD"
            },
            "_type": "image",
            "_key": "c430df6ab2a9"
          },
          {
            "children": [
              {
                "text": "酒精是如何导致口干的？",
                "_key": "2d619d2c0231",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "63ddc0b53a96",
            "markDefs": []
          },
          {
            "style": "normal",
            "_key": "5666ce3a42ce",
            "markDefs": [],
            "children": [
              {
                "marks": [
                  "strong"
                ],
                "text": "酒精会增加我们口腔中的“坏”细菌并减少“好”细菌的数量，从而改变我们口腔中的微生物群落。",
                "_key": "a61550f997c9",
                "_type": "span"
              },
              {
                "_type": "span",
                "marks": [],
                "text": "这会导致唾液“流速降低”。唾液不足会导致口干（也称为口干症）。这就是为什么许多人反应饮酒后口干的原因。",
                "_key": "4eb10f7874e6"
              }
            ],
            "_type": "block"
          },
          {
            "_key": "91384f520a9d",
            "markDefs": [],
            "children": [
              {
                "text": "酒精也有利尿剂的作用",
                "_key": "ccf5df8bdadd",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              },
              {
                "_type": "span",
                "marks": [],
                "text": "。这意味着您的身体由于长期摄入酒精而体液量减少，导致口渴感或脱水感增加。酗酒者可能会发现自己在喝了一夜酒后越来越脱水或喉咙干燥。",
                "_key": "09ec29e925e8"
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "2059fd1aa687",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "",
                "_key": "556cb20fb3a6"
              }
            ]
          },
          {
            "markDefs": [],
            "children": [
              {
                "text": "口干真的有那么可怕吗？",
                "_key": "290a29724f8b",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              },
              {
                "marks": [],
                "text": "\n",
                "_key": "b24be7e6bd08",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "772aa507539c"
          },
          {
            "asset": {
              "sha1hash": "b9d8e457dba4a475b254f33b4a4031d78d2cc85e",
              "_rev": "wEG01ZVtTimObULAv1D9b8",
              "_type": "sanity.imageAsset",
              "_id": "image-b9d8e457dba4a475b254f33b4a4031d78d2cc85e-920x613-png",
              "originalFilename": "640 (15).png",
              "assetId": "b9d8e457dba4a475b254f33b4a4031d78d2cc85e",
              "size": 506077,
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/b9d8e457dba4a475b254f33b4a4031d78d2cc85e-920x613.png",
              "extension": "png",
              "uploadId": "XF8To6vksRlUi79JKmU09T27CkBNGBR4",
              "metadata": {
                "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADZklEQVQ4jSWQ209bBQCH+99oYvRle5gPGjbdzHQji4kRcWEMF3GijmiGGyCgGTg6ZLKNO916pZfTy2lP7xdupYXSnp62pzeuQzIzk5mof8FnKA/f65ff79MYjDpsdjOi6CIYlDA/m6a7vZlrF95k7OYllid7OPBP89eKAcUyjOfBLeL2KUr5TQr5PMnlZWKRMNFomEQijsZiMSAIViTJi+Rz8/v9ftovn6Gr+RS2nzvYkab4R5b4V/ahCmN4RrsI6bWUskmqlTL5XJaNdIpUap10OoXGbjPjdguNdYJVT29XKy1nX+fuZ+/g037HjjTLq4yPl2kPinUM98hNQroR1Owae7vb1Gs1VLVEoVBAUfJoBIcVUXQTDHgxzY3TffU8bedeY7TzI6QHP5A1aNkPPGU/ukjR+YTo4x7ipjHU3Dp7e7vs7GxTrVZQVZVisYjG6bTj83kI+t0YJof5vrWJry6+ge72p2zMDVE0jHIo6XiV9vJH3ELacI8V2yOK2fWGrF6vU6kcC0snQpfT0egXCoiYpka40/Ye3c1vsdB9hZWxW2w96eNQnOe/TR9H4QWSC/0s2x6hZJLU6zVqtRqVcplS6eS2xu1y4Je8hIM+zDNaBjoucOeTU4zfeJ+5Ly8i/thG3fyQv5ds7Lsn2NANkBJ1FORNqtVqg3K53FinKMrJwmNhJOTHOj/OcOeHDH1+hpH2swxeOc3s9Q/ITQ/xMmLkRUjHtm+e0qofVclSLhVQiwpFRUaRs8i5LTQu4aRhOBTAZZ7l4e2r3L9xjt86zzPw8WnGW98loe1mV5zmKGriIGGnmgxSTCcopOLkkzHktSjyWozsWgyNw76I6HESDPjwOi3oxvuZ+ek6hr4WJjqaGGt5G6G3jS39CGXPJNXAUyoJB+qSh0LcRT7iIHdM1EUm4kJjs5o57hgKeImGRAJuI5J5gvBMH8LdFqbbm9B9fYmQ9lsy+nsorseoISNqzE4pZkMJW8kFLWT8FlKSBY110YTodrC+Gqcob1CSU8jpCPnIIplnvxAcvIbhm8vY+tpI6n+lHDFRW/VQW/M2qKx6kSMO1r0mEk4DGqNeh88jUMxtcrhf5/luhZqaYTu/wsGynbxuEKGnBUPvF2z4jBxVM/y5nedFPdfgubqJkoyyJAn4BQv/A+qrCiGb4NzLAAAAAElFTkSuQmCC",
                "dimensions": {
                  "aspectRatio": 1.500815660685155,
                  "height": 613,
                  "_type": "sanity.imageDimensions",
                  "width": 920
                },
                "isOpaque": true,
                "blurHash": "VLMGn%01LN?b$MX9ROS5jY%2R%x]smV@E1M{R*t6xuj@",
                "_type": "sanity.imageMetadata",
                "palette": {
                  "muted": {
                    "title": "#fff",
                    "population": 8.86,
                    "background": "#b78b6a",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "lightVibrant": {
                    "population": 0.06,
                    "background": "#f0a48c",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff"
                  },
                  "darkVibrant": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 9.3,
                    "background": "#663f24"
                  },
                  "lightMuted": {
                    "title": "#fff",
                    "population": 5.16,
                    "background": "#c7b6a6",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000"
                  },
                  "vibrant": {
                    "title": "#fff",
                    "population": 0.01,
                    "background": "#b4542c",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "dominant": {
                    "background": "#663f24",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 9.3
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 4.74,
                    "background": "#946543",
                    "_type": "sanity.imagePaletteSwatch"
                  }
                },
                "hasAlpha": true
              },
              "_createdAt": "2023-01-09T21:11:59Z",
              "_updatedAt": "2023-01-09T21:11:59Z",
              "mimeType": "image/png",
              "path": "images/y26fxi1c/production/b9d8e457dba4a475b254f33b4a4031d78d2cc85e-920x613.png"
            },
            "_type": "image",
            "_key": "dcbec76a442b"
          },
          {
            "_key": "e2e929b1b3da",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "这真的是视情况而定的。",
                "_key": "124770197836"
              },
              {
                "_type": "span",
                "marks": [],
                "text": "一年喝一两次酒后喉咙干燥没什么大不了的。然而，有些人即使不喝酒，也会感到口干。如果您正在服用会导致口干的药物，那么在您每日口干的基础上加上偶尔喝鸡尾酒的时带来的口干压力会对您的口腔健康产生不利影响。",
                "_key": "86e8973ae9f4"
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "_key": "d52100fe16df",
            "markDefs": [],
            "children": [
              {
                "marks": [
                  "strong"
                ],
                "text": "唾液是保护牙齿免于腐烂的第一保护因素",
                "_key": "47a34bc51549",
                "_type": "span"
              },
              {
                "_key": "844239be9d62",
                "_type": "span",
                "marks": [],
                "text": "。当口腔干燥时，牙齿得不到保护。事实上，当唾液很少甚至没有时，牙齿持续保持健康所需的矿物质就无法发挥作用，并且会发生脱矿质（矿物质从牙齿中移出）。"
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "_key": "ea433718621f",
            "markDefs": [],
            "children": [
              {
                "_key": "96d4a17b5c34",
                "_type": "span",
                "marks": [],
                "text": ""
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "markDefs": [],
            "children": [
              {
                "_key": "636af2d8afcf",
                "_type": "span",
                "marks": [],
                "text": "此外，许多酒精饮料本身都是酸性的，这对您的口腔黏膜来说是个坏消息。如果您选择的饮料本身不是酸性的，饮用时酒精饮料仍会导致口腔中的 pH 值下降。在两小时的用餐过程中喝一两杯酒会迫使口腔中的 pH 值长时间保持在 5.5 的临界点以下，这会让引起蛀牙的细菌非常高兴。啤酒和葡萄酒的 pH 值都在 3.2 左右。\n"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "3c01c5931ab5"
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "bd92e32cc1f8",
            "markDefs": [],
            "children": [
              {
                "_key": "4c47116e3659",
                "_type": "span",
                "marks": [],
                "text": "另外，考虑到含糖饮料对牙齿健康有明显的不利影响。当含糖饮料长期啜饮而不是快速饮用时，这些负面影响会更严重。不幸的是，许多混合饮料含有大量含糖果汁、甜苏打水，甚至含有液态糖。而且，人们很可能会在酒精饮料上流连忘返，慢慢啜饮。\n"
              }
            ]
          },
          {
            "children": [
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "虽然缓慢饮酒对您的血液酒精水平有益，但对您的牙釉质可能会很糟糕。",
                "_key": "4981f4f2c873"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "4e9e5089b011",
            "markDefs": []
          },
          {
            "children": [
              {
                "marks": [],
                "text": "",
                "_key": "a63f654ce6d8",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "e000ec7c8392",
            "markDefs": []
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "a6b5626178ef",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "口干对健康的影响",
                "_key": "e7cce1938372"
              }
            ]
          },
          {
            "_type": "image",
            "_key": "e0af51876504",
            "asset": {
              "sha1hash": "3ff5fafdae4c3d2e74c85c8f83081eff5cc5724d",
              "metadata": {
                "hasAlpha": false,
                "lqip": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAALABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAUGBAf/xAAjEAACAQMDBAMAAAAAAAAAAAABAgMABSEEBhESEyIxB0Fh/8QAFgEBAQEAAAAAAAAAAAAAAAAABAID/8QAGREAAwEBAQAAAAAAAAAAAAAAAAERAhJB/9oADAMBAAIRAxEAPwC8+O7tJLtFJtSO5MrOpZsDFa7Nep5NW6yRxmNh7AI6aXbYAj2JF0ALyc8frZpjegIbZcViAQLESOPrxozvg/CTy6cv3junUybj1q6KcdiN+2OM5HuioWyqH0ZZ/Ji7Ek5JoqeoZ80//9k=",
                "dimensions": {
                  "height": 604,
                  "_type": "sanity.imageDimensions",
                  "width": 1080,
                  "aspectRatio": 1.7880794701986755
                },
                "isOpaque": true,
                "blurHash": "MHMGba-=00r=00~qIU$%RjM{.8t6RPt8-o",
                "_type": "sanity.imageMetadata",
                "palette": {
                  "vibrant": {
                    "title": "#fff",
                    "population": 0.45,
                    "background": "#bd7f74",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "dominant": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 6.2,
                    "background": "#493a2f",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 6.2,
                    "background": "#493a2f",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "muted": {
                    "background": "#a9766a",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 5.83
                  },
                  "lightVibrant": {
                    "background": "#e0eefc",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#000",
                    "population": 1.86
                  },
                  "darkVibrant": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.28,
                    "background": "#2a1c0b"
                  },
                  "lightMuted": {
                    "title": "#fff",
                    "population": 4.49,
                    "background": "#cfa9a1",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000"
                  }
                }
              },
              "_rev": "wEG01ZVtTimObULAv1DFcd",
              "assetId": "3ff5fafdae4c3d2e74c85c8f83081eff5cc5724d",
              "_id": "image-3ff5fafdae4c3d2e74c85c8f83081eff5cc5724d-1080x604-jpg",
              "extension": "jpg",
              "size": 58179,
              "_updatedAt": "2023-01-09T21:13:26Z",
              "_createdAt": "2023-01-09T21:13:26Z",
              "originalFilename": "640 (9).jpeg",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/3ff5fafdae4c3d2e74c85c8f83081eff5cc5724d-1080x604.jpg",
              "_type": "sanity.imageAsset",
              "mimeType": "image/jpeg",
              "path": "images/y26fxi1c/production/3ff5fafdae4c3d2e74c85c8f83081eff5cc5724d-1080x604.jpg",
              "uploadId": "Mgsb642adNJRmorB09nkk9RwXOYEiFLE"
            }
          },
          {
            "children": [
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "咀嚼和吞咽困难，从而导致营养不良",
                "_key": "753871ea32e9"
              }
            ],
            "level": 1,
            "_type": "block",
            "style": "normal",
            "_key": "9db830f0d1c7",
            "listItem": "bullet",
            "markDefs": []
          },
          {
            "style": "normal",
            "_key": "a1bf5170d264",
            "listItem": "bullet",
            "markDefs": [],
            "children": [
              {
                "text": "口臭",
                "_key": "161e85b45a36",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              }
            ],
            "level": 1,
            "_type": "block"
          },
          {
            "_key": "f60d2dc103a8",
            "listItem": "bullet",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "舌头或喉咙痛",
                "_key": "5c45a6ae95da"
              }
            ],
            "level": 1,
            "_type": "block",
            "style": "normal"
          },
          {
            "markDefs": [],
            "children": [
              {
                "_key": "ebc4e571e7e4",
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "增加牙菌斑堆积、蛀牙和牙龈疾病"
              }
            ],
            "level": 1,
            "_type": "block",
            "style": "normal",
            "_key": "2ffa519804fe",
            "listItem": "bullet"
          },
          {
            "level": 1,
            "_type": "block",
            "style": "normal",
            "_key": "f64eb0169a03",
            "listItem": "bullet",
            "markDefs": [],
            "children": [
              {
                "marks": [
                  "strong"
                ],
                "text": "嘴唇干裂",
                "_key": "4a989fbdf988",
                "_type": "span"
              }
            ]
          },
          {
            "children": [
              {
                "text": "口腔溃疡或嘴角溃疡",
                "_key": "94f3b16c6d10",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              },
              {
                "marks": [],
                "text": "\n",
                "_key": "869967a264ff",
                "_type": "span"
              }
            ],
            "level": 1,
            "_type": "block",
            "style": "normal",
            "_key": "11b65fb795d4",
            "listItem": "bullet",
            "markDefs": []
          },
          {
            "children": [
              {
                "_key": "8d7e6f11c583",
                "_type": "span",
                "marks": [],
                "text": "由于口干会影响您的口腔和整体健康，因此您必须对其进行治疗。"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "0e13ca91e9cc",
            "markDefs": []
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "6d52d7134a86",
            "markDefs": [],
            "children": [
              {
                "_key": "0ef030e2c141",
                "_type": "span",
                "marks": [],
                "text": ""
              }
            ]
          },
          {
            "style": "normal",
            "_key": "27bf7b6f93de",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "如何避免饮酒后的口干",
                "_key": "8f6355b56aaa"
              }
            ],
            "_type": "block"
          },
          {
            "_key": "9e1d3fe04bd5",
            "markDefs": [],
            "children": [
              {
                "marks": [],
                "text": "",
                "_key": "31308bafaacf",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "_key": "dedd13b4d3c3",
            "asset": {
              "mimeType": "image/jpeg",
              "_type": "sanity.imageAsset",
              "sha1hash": "b4976a08d46eaf7d5c58aeea6db59fbb0f017030",
              "_rev": "3q3ySoeGye0Syz1GmBKQve",
              "extension": "jpg",
              "metadata": {
                "isOpaque": true,
                "blurHash": "V8MPp}D*nhxX%0~V%M9aV@s:9FxFxuods:xas:WBWXt6",
                "_type": "sanity.imageMetadata",
                "palette": {
                  "lightMuted": {
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 6.36,
                    "background": "#d4b49b",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "vibrant": {
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 0.67,
                    "background": "#be9573",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "dominant": {
                    "title": "#fff",
                    "population": 6.36,
                    "background": "#d4b49b",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000"
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "population": 1.6,
                    "background": "#6b4634",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff"
                  },
                  "muted": {
                    "background": "#a37e62",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 1.93
                  },
                  "lightVibrant": {
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 4.81,
                    "background": "#dcbca3",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "darkVibrant": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 4.35,
                    "background": "#391c11"
                  }
                },
                "hasAlpha": false,
                "lqip": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAYBAwQF/8QAIRAAAgICAQQDAAAAAAAAAAAAAQMCBAARIQUiI0ESMVH/xAAWAQEBAQAAAAAAAAAAAAAAAAAFAAH/xAAWEQEBAQAAAAAAAAAAAAAAAAAAIQH/2gAMAwEAAhEDEQA/AHJamsZW2zsExMxlIbGs23EGyZfGfcRxs4vdSXJTnTDZEpVuPrk5PTbTLVeq6ZIlPxnX5hmFK6dqkot8lCDpaAMx7wy6411doUlpEREffOGbU//Z",
                "dimensions": {
                  "height": 720,
                  "_type": "sanity.imageDimensions",
                  "width": 1080,
                  "aspectRatio": 1.5
                }
              },
              "size": 129217,
              "uploadId": "unhCPelX8JN7VPdMaqTcWfx7qKMPQZPx",
              "_id": "image-b4976a08d46eaf7d5c58aeea6db59fbb0f017030-1080x720-jpg",
              "assetId": "b4976a08d46eaf7d5c58aeea6db59fbb0f017030",
              "path": "images/y26fxi1c/production/b4976a08d46eaf7d5c58aeea6db59fbb0f017030-1080x720.jpg",
              "_createdAt": "2023-01-09T21:14:05Z",
              "originalFilename": "640 (10).jpeg",
              "_updatedAt": "2023-01-09T21:14:05Z",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/b4976a08d46eaf7d5c58aeea6db59fbb0f017030-1080x720.jpg"
            },
            "_type": "image"
          },
          {
            "style": "normal",
            "_key": "572a158571e1",
            "markDefs": [],
            "children": [
              {
                "text": "你必须戒酒才能避免口干吗？当然不是。虽然戒酒对您的口腔和整体健康是理想的，但喝杯酒也是在所难免的。",
                "_key": "41d71c814a9d",
                "_type": "span",
                "marks": []
              }
            ],
            "_type": "block"
          },
          {
            "markDefs": [],
            "children": [
              {
                "_key": "55b1dda3ecc8",
                "_type": "span",
                "marks": [],
                "text": ""
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "ba1a79753697"
          },
          {
            "_type": "image",
            "_key": "dfb44263a908",
            "asset": {
              "mimeType": "image/jpeg",
              "_createdAt": "2023-01-09T21:15:04Z",
              "originalFilename": "640 (11).jpeg",
              "size": 45058,
              "_id": "image-c7e38d2b34b669ead98445220eb148ea65f53fa4-1080x608-jpg",
              "metadata": {
                "hasAlpha": false,
                "lqip": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAcFBgj/xAAiEAABAwQCAwEBAAAAAAAAAAABAgMEAAUGEQcTEjFBIWH/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQME/8QAGREAAwEBAQAAAAAAAAAAAAAAAAIhAQMS/9oADAMBAAIRAxEAPwCBkc9Za6AAuNr7tumBx7muXZLZXp7jzRSlzxSlpvZH9NZ1tuus7CT+/QDTV4Ku06Pfp0RmQpEYoKusAa3r3WnomeYRRrS6Zfm+c2W8GKzLhlHWlY7G9EbopK59eLhOyqa5KluuLSrwBJ9AehRQvOYJmp//2Q==",
                "dimensions": {
                  "_type": "sanity.imageDimensions",
                  "width": 1080,
                  "aspectRatio": 1.7763157894736843,
                  "height": 608
                },
                "isOpaque": true,
                "blurHash": "MgI#x}4.of-;IU~q%Mt7Rjxu_3xuofWBjZ",
                "_type": "sanity.imageMetadata",
                "palette": {
                  "lightMuted": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 0.43,
                    "background": "#dac1ba"
                  },
                  "vibrant": {
                    "background": "#b60d1e",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.1
                  },
                  "dominant": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 0.43,
                    "background": "#dac1ba"
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.04,
                    "background": "#2c3755",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "muted": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.01,
                    "background": "#946e5c",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "lightVibrant": {
                    "population": 0,
                    "background": "#f6838e",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff"
                  },
                  "darkVibrant": {
                    "population": 0.05,
                    "background": "#042334",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff"
                  }
                }
              },
              "assetId": "c7e38d2b34b669ead98445220eb148ea65f53fa4",
              "_updatedAt": "2023-01-09T21:15:04Z",
              "extension": "jpg",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/c7e38d2b34b669ead98445220eb148ea65f53fa4-1080x608.jpg",
              "uploadId": "jA5Z9BRzWG7FSRpmGOyPTuNffsJA9PcV",
              "_type": "sanity.imageAsset",
              "sha1hash": "c7e38d2b34b669ead98445220eb148ea65f53fa4",
              "path": "images/y26fxi1c/production/c7e38d2b34b669ead98445220eb148ea65f53fa4-1080x608.jpg",
              "_rev": "3q3ySoeGye0Syz1GmBKoDu"
            }
          },
          {
            "style": "normal",
            "_key": "6af216609bd5",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "- 在饮酒之间喝一杯水。",
                "_key": "06f41884ac12"
              }
            ],
            "_type": "block"
          },
          {
            "style": "normal",
            "_key": "ef478c0086a8",
            "markDefs": [],
            "children": [
              {
                "text": "- 请注意您的饮料为您的日常消费增加了多少糖分。",
                "_key": "72a10a3ba4c9",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              }
            ],
            "_type": "block"
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "a231254a943a",
            "markDefs": [],
            "children": [
              {
                "marks": [
                  "strong"
                ],
                "text": "- 在您享用饮品后，手边保留一包木糖醇口香糖以供咀嚼。",
                "_key": "65387b5fec41",
                "_type": "span"
              }
            ]
          },
          {
            "_key": "c8977640c64f",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "- 在度过一个愉快的夜晚后回家时，一定要刷牙并用高 pH 值产品冲洗。",
                "_key": "18bdd1bcd5f5"
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "style": "normal",
            "_key": "6f98c28344d9",
            "markDefs": [],
            "children": [
              {
                "text": "- 第二天多喝水。",
                "_key": "4480e6d4a5f7",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              }
            ],
            "_type": "block"
          },
          {
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "",
                "_key": "02af486ae508"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "2df5f4ace78c"
          },
          {
            "_key": "82da5adfa1a8",
            "markDefs": [],
            "children": [
              {
                "marks": [],
                "text": "和好朋友一起喝酒当然很欢乐，但一定要注意第二天您嘴巴的感觉。如果它又粘又干，一定要在您的日常生活中做一些措施来帮助保护牙齿！",
                "_key": "838333587b8c",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "",
                "_key": "4d59beacab4d"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "6d59d68dbe13"
          },
          {
            "_key": "7b438e97e9ab",
            "asset": {
              "size": 157335,
              "metadata": {
                "_type": "sanity.imageMetadata",
                "palette": {
                  "dominant": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 7.23,
                    "background": "#6d8c9a",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.09,
                    "background": "#2b4957"
                  },
                  "muted": {
                    "population": 7.23,
                    "background": "#6d8c9a",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff"
                  },
                  "lightVibrant": {
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 4.97,
                    "background": "#dbad93",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "darkVibrant": {
                    "population": 1.1,
                    "background": "#533024",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff"
                  },
                  "lightMuted": {
                    "title": "#fff",
                    "population": 0.26,
                    "background": "#b0c7d2",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000"
                  },
                  "vibrant": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.27,
                    "background": "#c0754a",
                    "_type": "sanity.imagePaletteSwatch"
                  }
                },
                "hasAlpha": true,
                "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEfElEQVQ4jS3SW08TBhjG8X6EJVuWORQRFVGZbhE14lREJsQBgiBFKAcB5dy1BcqptrUtpdIDPRdKj3QoB6WgUxcRFJ2nILqNaDIvNueyLcEL/Qb/hc6LJ+/dL8+bPIJOxwhyq582q492RxC5O4LMFUFsD1HfP0SpXEumsIrUjGzSjhVS0NhBtdZJrWGIGr2H070eqrRuKjQuys87EXRYg7RZhpFZhpDZfLQ6w0gcYeouDFLY0sG+rFySd+4iMSmZpG0p7M38lkKxgmqdm2r9IKd1H8DzLkRqBwK5I0ybPUCrPYDMHkDiCNFk8VMsU7ErPZP4hA3Er13Lxvh1bFgXR+LmLRzIL6W020iVzkPlKqb9v12ZahX0RGh3R2hzjyBzhhHbw9T0OskormTjpo1sT4jj6K4UCtK+4tAXSayPW8O23fvJbeikTGWjXO2IYavtylT2VfD7D2AEqTNMszWE6JyRtOxc9u9IQpKfQUBey6XuGhTFh0ndFEfC5i0cKq6mqF1PSY+FUqWNUqU9FkEMc43Q6hpBYg/RaAlQ0qEnM+c4DXmHme6Tsjzu4OdgL2PtJZTtS2ZbYgJ7so6T29RDkbwPYZeJEsUApxRWBDHMOYLUEUZsC1Jv9CHs0FMoLEVTK+SWTcmzUTsLThXjHRV05+zl8PZEdh84QlaNlAKZhqL2Poq7TAi7LQhWMZkjHGvXMhCgrn+Yko4+RFU12GRnWXBqWQqYWLCpmDnXgO5kOkdSEtm5J40MUSN5YiUnZFqK5AZOdhoRSD9gYmuQZrOfs/1ehHI9RaUV9DdV8sClYTloYsmt5aa6CemxNFLWryFpZyqHSs6Q09RDvkTNibZeCtsNCL6zBWPNVrGGfm9srAUtCg4eOcqZnAyme6U8Cxh4ZFcQEp/ieGoyn338EQlbd5B2oors+i7yxCryZToK2voQNFv8NJl8NBqHY2izaRiRVEH2N5nU5Rxkqk/C8vgAiz41rvp80rfG8/mnn5D85W7ShWc41qggR6wiT6IlX6ZH0NA/HAPlrlGMF68xFJ3FEbqEWackpG7mvl/HyxkPSyNa/JIiTn29g6wD+ymvbUTaa0Ns9FKhHIi9GwNr9R5azAGMo9cYu/2Qqz89Y+buE6LRKaK+AW6GrNwZH+JH/wWC6mZUdSLU3V0Mj15mfPYh4Zv30IemqO8bjM1HUKlx0mT0Y4jM4J2ZY/jqPN7pOdyjV7DZHTitFnxeN74hJ26rEYtBj2vIz+iNO1y+u8jE/BO8M/MoBseo0boQlKvtiC1BTKPXGIzeZjA6i2dqFufFaQYcLsx6HRZDL3arGYfVhNXcj9sfJnL9DhNzj5mYf0z4xj20/klqNA4EIqUNjf8K0YWnzC+9ZO7pC+aWXjL7cIkfJi8yYewmom5hzNjDlFPDZbeBq9Ep5heXub/8Kpbrj35BH5jkZKsOgeicFfeVW/z6+9/89fY9b1be8Wb1/rvCq8dzLHo6WThfwQOzmOcBJc/HzLx4ssAf/6zw59v3vF55x+JvrzEEJsmqlfMfBC1QIN+7nXkAAAAASUVORK5CYII=",
                "dimensions": {
                  "_type": "sanity.imageDimensions",
                  "width": 400,
                  "aspectRatio": 1.1976047904191616,
                  "height": 334
                },
                "isOpaque": true,
                "blurHash": "eFF$t..83ZRizn00t6%1oe-;*0RP=_t64nE3o0wcR+ShxGogR*jZn*"
              },
              "_type": "sanity.imageAsset",
              "path": "images/y26fxi1c/production/861af0327701384b6f85f07702bbda8a9dc97efb-400x334.png",
              "extension": "png",
              "uploadId": "PNIDl4nUzOPpMMub9m6df7IOA0xctD9t",
              "originalFilename": "640 (16).png",
              "_updatedAt": "2023-01-09T21:15:45Z",
              "mimeType": "image/png",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/861af0327701384b6f85f07702bbda8a9dc97efb-400x334.png",
              "_createdAt": "2023-01-09T21:15:45Z",
              "sha1hash": "861af0327701384b6f85f07702bbda8a9dc97efb",
              "_rev": "wEG01ZVtTimObULAv1DWoF",
              "_id": "image-861af0327701384b6f85f07702bbda8a9dc97efb-400x334-png",
              "assetId": "861af0327701384b6f85f07702bbda8a9dc97efb"
            },
            "_type": "image"
          },
          {
            "style": "normal",
            "_key": "ccfed6cf1a39",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "如果您的症状持续存在，我们的牙医可以开凝胶或漱口水帮助您控制症状，以帮助您保持口腔湿润。并且不要忘记，对于唾液流量减少的人来说，保持良好的口腔卫生尤为重要。每天刷牙，并用牙线、水牙线器或其他牙间清洁剂清洁牙缝。",
                "_key": "f2c6a33e2da3"
              }
            ],
            "_type": "block"
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "990b299543cf",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "口干舌燥不是一段宜人的经历。如果饮酒是导致您口干的原因，请随时咨询我们的牙医如何能改善这一症状，从新拥有一个舒适的口腔环境。",
                "_key": "a441369ee76e"
              }
            ]
          },
          {
            "markDefs": [],
            "children": [
              {
                "marks": [
                  "em"
                ],
                "text": "请不要忽略预警征兆，尽快治疗！",
                "_key": "ce5ddf38b670",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "9f8c6b00fa18"
          },
          {
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "",
                "_key": "e12e43094933"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "8ecd5426ed28"
          },
          {
            "_type": "image",
            "_key": "df1a63eff6bd",
            "asset": {
              "_rev": "qLNVIvT2xXiIXINTMgkutQ",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/9ab49bf6722ad91dc897daa32c0ae0a98aae7936-440x444.jpg",
              "assetId": "9ab49bf6722ad91dc897daa32c0ae0a98aae7936",
              "path": "images/y26fxi1c/production/9ab49bf6722ad91dc897daa32c0ae0a98aae7936-440x444.jpg",
              "_createdAt": "2023-01-06T11:31:11Z",
              "_id": "image-9ab49bf6722ad91dc897daa32c0ae0a98aae7936-440x444-jpg",
              "extension": "jpg",
              "_type": "sanity.imageAsset",
              "originalFilename": "640 (5).jpeg",
              "_updatedAt": "2023-01-06T11:31:11Z",
              "metadata": {
                "_type": "sanity.imageMetadata",
                "palette": {
                  "muted": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0,
                    "background": "#847c84",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "lightVibrant": {
                    "background": "#c0b8b9",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 0
                  },
                  "darkVibrant": {
                    "title": "#fff",
                    "population": 0,
                    "background": "#463e3f",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "lightMuted": {
                    "title": "#fff",
                    "population": 0.01,
                    "background": "#bcb4b5",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000"
                  },
                  "vibrant": {
                    "title": "#fff",
                    "population": 0,
                    "background": "#86787a",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "dominant": {
                    "background": "#444444",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.61
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.61,
                    "background": "#444444"
                  }
                },
                "hasAlpha": false,
                "lqip": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAQCAwUG/8QAKBAAAQMDAwMDBQAAAAAAAAAAAQIDBAAFEQYSIRNRYSIjQTEyQoGh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOzcojsudLbTcX8mQdm1ZBTjx2rF24yLE24pc555srDeFKKikkfbmtstbsXU7xhMkMuuK9Lh+pH5E/Arn6gvir/EU1JjRorMV7C+mMrWccEUFVqlyHopWy/KdSpRJPY9v1SrbIytdtZLJSsYAJCdvOKUHpLbpe3yptz6xfUFK5HU81PJ0VaG2faS8gqUMlKhz/KUoLm4SIG6PFWtDSTwOD8DxSlKD//Z",
                "dimensions": {
                  "width": 440,
                  "aspectRatio": 0.990990990990991,
                  "height": 444,
                  "_type": "sanity.imageDimensions"
                },
                "isOpaque": true,
                "blurHash": "eBLN.4-;%Mj[~qofj[M{%MfQ-;M{xuxuD%RjM{%M%MWB~qRjD%oft7"
              },
              "uploadId": "UF7biKwfDI2DxWak5JgRbTXnIYueEnlX",
              "mimeType": "image/jpeg",
              "sha1hash": "9ab49bf6722ad91dc897daa32c0ae0a98aae7936",
              "size": 42572
            }
          },
          {
            "markDefs": [],
            "children": [
              {
                "_key": "9172796d83a2",
                "_type": "span",
                "marks": [],
                "text": "\n"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "fc6a0346a286"
          }
        ],
        "slug": {
          "current": "alcohol-teeth-and-dry-mouth-",
          "_type": "slug"
        },
        "publishedAt": "2023-01-09T22:10:00.000Z",
        "mainImage": {
          "asset": {
            "url": "https://cdn.sanity.io/images/y26fxi1c/production/16ecd738530d893db6218fd7c2359feeade9b265-1080x720.png",
            "sha1hash": "16ecd738530d893db6218fd7c2359feeade9b265",
            "originalFilename": "640 (13).png",
            "assetId": "16ecd738530d893db6218fd7c2359feeade9b265",
            "extension": "png",
            "_id": "image-16ecd738530d893db6218fd7c2359feeade9b265-1080x720-png",
            "_createdAt": "2023-01-09T21:09:00Z",
            "_rev": "9Sh1niKpid77KkNKMp4r9N",
            "_type": "sanity.imageAsset",
            "path": "images/y26fxi1c/production/16ecd738530d893db6218fd7c2359feeade9b265-1080x720.png",
            "metadata": {
              "dimensions": {
                "height": 720,
                "_type": "sanity.imageDimensions",
                "width": 1080,
                "aspectRatio": 1.5
              },
              "isOpaque": true,
              "blurHash": "VAC$o|ABPCXS}@?vaK9aaJRj5Rxawa=y5R-VI;xut7Rn",
              "_type": "sanity.imageMetadata",
              "palette": {
                "lightVibrant": {
                  "background": "#f5c0b0",
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#000",
                  "title": "#000",
                  "population": 3.24
                },
                "darkVibrant": {
                  "background": "#75271e",
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#fff",
                  "title": "#fff",
                  "population": 0.78
                },
                "lightMuted": {
                  "title": "#fff",
                  "population": 6.07,
                  "background": "#beb1b2",
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#000"
                },
                "vibrant": {
                  "background": "#dc8538",
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#000",
                  "title": "#fff",
                  "population": 1.09
                },
                "dominant": {
                  "title": "#fff",
                  "population": 6.69,
                  "background": "#807a77",
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#fff"
                },
                "_type": "sanity.imagePalette",
                "darkMuted": {
                  "foreground": "#fff",
                  "title": "#fff",
                  "population": 5.98,
                  "background": "#3c4a48",
                  "_type": "sanity.imagePaletteSwatch"
                },
                "muted": {
                  "background": "#807a77",
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#fff",
                  "title": "#fff",
                  "population": 6.69
                }
              },
              "hasAlpha": true,
              "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADXUlEQVQ4jR3DW09aBwDA8fMp3ERBrHgBhCMX8RzuF4EDgqAMDigXUQQRFIE47ea02NmSamvXZDFL35olPixZuo+wpz3uI/2X7Jf8hJ3qHqnSHjvNNofdNt9VdlFrVc76J9yNLrl/c0X/7JRMOkW/ovLn/S1/PX3i3d0dnV6fk/6Qm9ufOR0MiabTCKs+Pz5lg/32Ma3uMVulAkpmk+RmCrVSodY5RdkuYLE5CLklOjt5DqoV0sUK+foRg4srxuP3nJye4Y+EEKaMZpzBMNVmi/LBPrFMGlcoiNXtJarusTf4iZ3KLiG3DUlyEY4nEP1hFgMKifoJl68/8Pj+V4b9AbFEFGHR5cajJMlVq2yWiviTCZyhCIGNDPu9S16O3vLwssm7bpb6bo5gOsuc5Ee7FsS3c0T35gN3bx/pnZwQT8YQ4ls5NtUi6aKKktvCl1DwxGLsV3f5ZXTDw/UFz2/q/P1bj9uLNt5kmhmnjGbFhU3JcTC8YTz+yPC0R2Q9gNBotag2GsS2M/g3YsjRMJ5ImG65wNP5MQ9tla/Xm/z7ucmot4vo8TEtOtCKTkRviE7ziC+PH3l1fk4w4Ebo9vrUDpv4kgr2oBvR7cIpS+RTCq2sQisq8fthgH9GWYalMAariH55BdHtQ/YH6Ba3+Xr/mk8/fk807EU4/+GGertDKJ1ADnmQZAeyy44S8pLyS6ScFkYJF1/KfiphJ/olI2abk41kCjWzQb+Q5Pmqxx9311y3GwiDqxG7xx1ihS3iGYXIuh+ve5WQd424b42g00bKsYK6ZmfVakWzYMYm+9gplek36lzU8ryql3g6H/A8HiNsHTRJVGuE1TzeVBK728OSRWTRZMJkNrOwtMzsvJXZhRW0i3Zmll2sBZPkigeUywfksjli6wkyiSztSgMhX66g1vaIZzK4PF7MJgvGFwaM+lkWZ/TMz7xgQT+Pac6EuGhFtjhIyEG2I0lSwTgByYfbKRN0yiQlD8LlaYfLXodcWkFesWCfm8Gh07Cqm8SpncQxPYmk1eDXTRGa1aIY9OSM86iimW27lYRoRrEskRGNFFaMCJ16iXZNJeR1sTSnZ2F6EpNmAotmAqtmAptmAmlqAu/0BNL0N//3a78loJ/CbdCzNj+Ly6BDNujwGHT8ByB78Tbe2g43AAAAAElFTkSuQmCC"
            },
            "size": 985024,
            "mimeType": "image/png",
            "_updatedAt": "2023-01-09T21:09:00Z",
            "uploadId": "ia6s7NfygH9zmSBZMZwq2uz1F5mWmYKU"
          }
        }
      },
      {
        "mainImage": {
          "asset": {
            "extension": "png",
            "_rev": "3q3ySoeGye0Syz1GmAuPQl",
            "assetId": "cc92770fa542d8ffb3f630467b1d2d27095399c7",
            "mimeType": "image/png",
            "_updatedAt": "2023-01-09T20:02:38Z",
            "metadata": {
              "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADKUlEQVQ4jX2Sa08TZhiG+zuWJSxREwUGg9K0Y9ZSixUsNLUIVOk0AUvBYgxnW8apozINNGzGBSFQDg4P0wlCHMRojDYBmloL2GzqxkwEkVJalC8iCdfSTsnmlr3Jlft5Prx3rg+P4GUgxIulIHOLy8wtBlhYChJ8tUro1Sour4ev25o4WmGg2GyiqLoY3REtihQx0qQ4pKJ4UlMkaHNV5ORrydClIXgZCEYKXyyFWAiEWFxe+avw9SoTHjc133yFrkiHvkSPrjCX1L07USQnYjyowWzKR69NR7FbjEItJUW9812hfzliFrYN50IgPAdxuiaoaKgkQ7+PzC8zUGp3kyTcjloupqPZwq1LnZwxH0cpEyKSxiJWJiJYeb3KUnBlE/9yaJNx9yRltaUosuTI98sQyz4jPjoKQ/Y+hrvbePDzZfrtDWSnS0kQbSNBFo1gfX2dtbdvebO2xpu1f6Z3xkt5bSmqg2noCrLJ1ChJk0lorjBx70cHrsF+BuyNHMqQExsXRYxkCwI+eBsbG5s57ZvCbK2k3HKCCwN99Pc4+L61hZG+bh4MX8M50E3PqVoKDmQiEkWzQxiFIPzxQ94XTj16SL3NjN1uY8rl4tmvT3ky7WM2jNuDZ3SUkd4eztvtGA2HEX6x4/8NvTMPsdSVYj1ZgvPKRWbvO5n3zuB/PIv/yR889z3m92kfPo+XjvazpKqS/9vwPeHCk3UVWEoMjLW28ajvEk8HR3l2y8ncfTfPJ7z8Nulh8s4dWk43Itsj+rfh31yZ+WUa27fNNJ1uYtDRy92LV3BeHWJ86Cbum7dxj91m7PIFWhrK0ah2sT32YwTzi0Hm/eFbDLIQPu53hPe74+M0ftdEfXs9566epeN6O53XO+kadOC48QM9N/o512XlmFGFKGEbn2z9CEHT+WvYOn7iTPcQrb3D2COMRGazvYtDpWXoqwoptJ7AaCvDeKqSQls1+VYzh+uq0VcVozmSw6696cQmyxHEaMr4dH85wpxqJHkWPs+rQZJXE8mk3CriNMeJ1xwjUWsiMcuE8EAJCVkmYtRFbE07yhZlAfHqImS5JQjVBv4E8YPrs2OLHI4AAAAASUVORK5CYII=",
              "dimensions": {
                "_type": "sanity.imageDimensions",
                "width": 800,
                "aspectRatio": 1.5009380863039399,
                "height": 533
              },
              "isOpaque": true,
              "blurHash": "V$L}85_Nxvs:D%WBxut6RjWVE0afjaR%t7-;oebHoMf5",
              "_type": "sanity.imageMetadata",
              "palette": {
                "dominant": {
                  "population": 5.09,
                  "background": "#1a3e63",
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#fff",
                  "title": "#fff"
                },
                "_type": "sanity.imagePalette",
                "darkMuted": {
                  "title": "#fff",
                  "population": 1.67,
                  "background": "#3b4c38",
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#fff"
                },
                "muted": {
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#fff",
                  "title": "#fff",
                  "population": 5.08,
                  "background": "#908982"
                },
                "lightVibrant": {
                  "population": 1.48,
                  "background": "#d4c197",
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#000",
                  "title": "#fff"
                },
                "darkVibrant": {
                  "foreground": "#fff",
                  "title": "#fff",
                  "population": 5.09,
                  "background": "#1a3e63",
                  "_type": "sanity.imagePaletteSwatch"
                },
                "lightMuted": {
                  "title": "#fff",
                  "population": 2.01,
                  "background": "#d5b7b5",
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#000"
                },
                "vibrant": {
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#000",
                  "title": "#000",
                  "population": 0.98,
                  "background": "#e3da40"
                }
              },
              "hasAlpha": true
            },
            "size": 366175,
            "originalFilename": "640.png",
            "_type": "sanity.imageAsset",
            "path": "images/y26fxi1c/production/cc92770fa542d8ffb3f630467b1d2d27095399c7-800x533.png",
            "_id": "image-cc92770fa542d8ffb3f630467b1d2d27095399c7-800x533-png",
            "sha1hash": "cc92770fa542d8ffb3f630467b1d2d27095399c7",
            "url": "https://cdn.sanity.io/images/y26fxi1c/production/cc92770fa542d8ffb3f630467b1d2d27095399c7-800x533.png",
            "uploadId": "wpwxPBFuSWDbuwNFC3CiVhEql7d9WAVZ",
            "_createdAt": "2023-01-09T20:02:38Z"
          }
        },
        "title": "Our Secrets to a Successful Back-to-School Dental Checkup",
        "body": [
          {
            "_key": "7a161f803b10",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "Summers are often chocked full of fun and adventure, so it’s easy for back-to-school to sneak up on you.",
                "_key": "8d07b640a5960"
              },
              {
                "marks": [],
                "text": " ",
                "_key": "2af86bff5134",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "markDefs": [],
            "children": [
              {
                "_key": "3d7f41ef267d",
                "_type": "span",
                "marks": [],
                "text": "If you are like many parents, you may have failed to schedule a back-to-school dental visit for your child, but that checkup is key in fighting the most common chronic disease found in school-age children: cavities."
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "286a4a3460c4"
          },
          {
            "_key": "816c6a20516e",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "Luckily, if you missed the chance to get them in before school started, it’s not too late. Our dentist will help spot any issues that are found, and also help a child get “back on track” if some of their dental habits fell away during summer. It’s common for dental habits to change in the summer, when normal routines are different, and there are more treats around.",
                "_key": "0cc2e7b5a2980"
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "children": [
              {
                "marks": [],
                "text": "When you get your kids “school ready”, make sure their teeth are school ready too!",
                "_key": "25ddc2484eb30",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "49547e393f68",
            "markDefs": []
          },
          {
            "markDefs": [],
            "children": [
              {
                "marks": [],
                "text": "\n",
                "_key": "0ef41fc16b1b0",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "f44733e16ae5"
          },
          {
            "children": [
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "Encourage Good Dental Habits at Home",
                "_key": "951f7c7a74b50"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "1a3e3a4316a0",
            "markDefs": []
          },
          {
            "_type": "image",
            "_key": "b876a862d284",
            "asset": {
              "size": 271051,
              "metadata": {
                "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC40lEQVQokV3Q3U+bZRiA8fc/MjExJh4tOzBqTGaMYdNMB85sy8xkCy7IRgtso3xIWdlQsbxpSktp2Qr9Wt8Wa6TSLmsD7UaHLS2MfsWj6TreflJaLtMaYuKTXLnPfrnvR3j1ukirwn6RYqlCtVYjnX2G1TGAqOvE/bCfqHcOySRyd/QWlmkVMUnH3pqFdNBK5omTvaCVuPsHNvQ3EY7Bf7F6G3yRjmK1DTCvv0jAOUEq4OT5qpvf7SZCTiPbvy2y5RFZt95jy6Nnx28i4Z7i6YLyGJTZl0sUy1XkUpnkzjpLy4PYDNfYdM+QC7rIPnazF3CSDnl4EZJYW9JimFTgnh1hS/qZuEtNxKRAkEsVCvul9smlcpVKtcru7lMc1lE8+htsLk0TlxZI+RbJrFrIh+xk172Ef1nGLE7jnB1n03GfmEONX9uLUK8fUq0dtKsfHtJoNNhNxTHrNDyYvMHKzDjmn0Q8BiMJl56c30Qu7GJ3w8/zoI+Y7yEJr0jUMoI0dhnh6OiIVs3j2WyS3E4yOTbB0JVLiMp+hns1DH2rwaq+y6ZNRyZgIx9ZJf8sSDYskfKKRHQKfLfPI/C/1wJTiSSqIRXnTp9h7JsriNfvoPxCweCXvbg035OSjOSDdtJrSyQ8ItEHo/h+vMrc4Kf/bdiqDTYaJGJ/oOq/w+lTHfR0dWFR3MTcN4C2b4iVGQ0pj5E93xxPTCMsT3dj1Fxg/HYHl7tPItQqVcqlMpVKpf1/rRJb24zdUnP2k04uft6JVtFDQJwgajewvWojG3pE3DePeaoH5Xcfcb3vfc5fPcGprrcQ5FcF/n75F4VCgdrBAc1Gk3w6h3F2nt5rSoYVSmwzo8SkOTIhL7nIr+QjKyTXFrGJA/T3neGr7nfpuPAO7332JkJZLiG/3qcoy9Tr9Tb4Mv8n0oINteoeBlFL2D3PTvARmQ0/uQ0f2bCDzONF1u0apoa/5tylD/jw7Nuc+PgN/gFUZrlXGqJ4NgAAAABJRU5ErkJggg==",
                "dimensions": {
                  "_type": "sanity.imageDimensions",
                  "width": 720,
                  "aspectRatio": 1.7777777777777777,
                  "height": 405
                },
                "isOpaque": true,
                "blurHash": "MrOWB2?w%g-;Mx%1R*s:Rls:S1oLWBjZbH",
                "_type": "sanity.imageMetadata",
                "palette": {
                  "muted": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 5.16,
                    "background": "#949869"
                  },
                  "lightVibrant": {
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 0.13,
                    "background": "#ecb188",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "darkVibrant": {
                    "title": "#fff",
                    "population": 0,
                    "background": "#134571",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "lightMuted": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#000",
                    "population": 3.3,
                    "background": "#dcc7b7"
                  },
                  "vibrant": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.76,
                    "background": "#1f70b8",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "dominant": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 5.16,
                    "background": "#949869",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 3.31,
                    "background": "#55663a",
                    "_type": "sanity.imagePaletteSwatch"
                  }
                },
                "hasAlpha": true
              },
              "sha1hash": "2dc2d8b6f466043ba62cb987370de9e92b9753e9",
              "_createdAt": "2023-01-09T20:04:48Z",
              "_rev": "wEG01ZVtTimObULAv15KgO",
              "assetId": "2dc2d8b6f466043ba62cb987370de9e92b9753e9",
              "_type": "sanity.imageAsset",
              "originalFilename": "640 (1).png",
              "_updatedAt": "2023-01-09T20:04:48Z",
              "mimeType": "image/png",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/2dc2d8b6f466043ba62cb987370de9e92b9753e9-720x405.png",
              "extension": "png",
              "_id": "image-2dc2d8b6f466043ba62cb987370de9e92b9753e9-720x405-png",
              "uploadId": "xFOnOohigE60EHsnuQabCuUy5hfsfyy1",
              "path": "images/y26fxi1c/production/2dc2d8b6f466043ba62cb987370de9e92b9753e9-720x405.png"
            }
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "b7104bf16024",
            "markDefs": [],
            "children": [
              {
                "text": "Parents play the most essential role in teaching their children good dental habits. You should be encouraging your kids to brush twice a day and to floss before sleeping. Some of our tips:",
                "_key": "933a02adef4a0",
                "_type": "span",
                "marks": []
              }
            ]
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "bcdfe6901cc1",
            "markDefs": [],
            "children": [
              {
                "_key": "f77baaf5fb470",
                "_type": "span",
                "marks": [],
                "text": ""
              }
            ]
          },
          {
            "style": "normal",
            "_key": "877fc76e3fd7",
            "listItem": "bullet",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "Ages 6 and Under",
                "_key": "22f9ae63be350"
              }
            ],
            "level": 1,
            "_type": "block"
          },
          {
            "children": [
              {
                "marks": [],
                "text": "Your kid might want to do all the brushing, but ",
                "_key": "faa10b08bd42",
                "_type": "span"
              },
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "doesn’t yet have the fine motor skills ",
                "_key": "22f9ae63be352"
              },
              {
                "text": "needed to do a proper job. Make it exciting for them to brush their teeth but keep an eye on their technique. At young age the mouth is changing so drastically, that 5 or 6 year olds are often brushing their teeth the same way when they were 2 or 3. Often they don’t brush new molars in the back of the mouth, and develop their first cavities in the newest molars.\n",
                "_key": "22f9ae63be353",
                "_type": "span",
                "marks": []
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "3c9ec3092f7d",
            "markDefs": []
          },
          {
            "children": [
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "7 to 12 years old",
                "_key": "f487f6e0ef360"
              }
            ],
            "level": 1,
            "_type": "block",
            "style": "normal",
            "_key": "fa12c775f2a9",
            "listItem": "bullet",
            "markDefs": []
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "d880f7a40647",
            "markDefs": [],
            "children": [
              {
                "text": "At this age your child knows what to do, but ",
                "_key": "0566c4b88edb",
                "_type": "span",
                "marks": []
              },
              {
                "marks": [
                  "strong"
                ],
                "text": "laziness is becoming a thing.",
                "_key": "f487f6e0ef362",
                "_type": "span"
              },
              {
                "_type": "span",
                "marks": [],
                "text": " Keep encouraging proper brushing and flossing habits. Parents should put emphasis on understanding self-care and accountability for their actions.\n",
                "_key": "f487f6e0ef363"
              }
            ]
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "6031f44b830d",
            "listItem": "bullet",
            "markDefs": [],
            "children": [
              {
                "text": "12 to 18 years old",
                "_key": "3315430978770",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              }
            ],
            "level": 1
          },
          {
            "children": [
              {
                "marks": [],
                "text": "This is the most critical time for dental health. ",
                "_key": "90e6aa7cf1ae",
                "_type": "span"
              },
              {
                "text": "Research shows: the teenage years and early adulthood is the second most common time to develop cavities",
                "_key": "3315430978772",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              },
              {
                "marks": [],
                "text": ". During this time parents start having less control over their children’s diet: sodas and sweets in schools, long school days can have a toll on their teeth enamel. Even though your kids might be very responsible and are able to take care of themselves, remind them of importance of having healthy oral hygiene. These habits will translate into their adulthood. ",
                "_key": "3315430978773",
                "_type": "span"
              },
              {
                "text": "Timing Is Important",
                "_key": "3315430978774",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "bd12a209fbe2",
            "markDefs": []
          },
          {
            "_type": "image",
            "_key": "6e28d7dd2ee4",
            "asset": {
              "uploadId": "6XyBhsOmFI90bFg3WMx1vK5kor5ZDIhD",
              "assetId": "2149d6bbc250a732dff100b91fa0a9670c2601f1",
              "sha1hash": "2149d6bbc250a732dff100b91fa0a9670c2601f1",
              "_createdAt": "2023-01-09T20:05:48Z",
              "originalFilename": "640 (2).png",
              "metadata": {
                "isOpaque": true,
                "blurHash": "M7OgA}00%3_4000000xaVsIVO@5T_3_2E1",
                "_type": "sanity.imageMetadata",
                "palette": {
                  "muted": {
                    "background": "#aa7e70",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 2.79
                  },
                  "lightVibrant": {
                    "title": "#fff",
                    "population": 0,
                    "background": "#c7bcb1",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000"
                  },
                  "darkVibrant": {
                    "population": 0,
                    "background": "#4d4137",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff"
                  },
                  "lightMuted": {
                    "background": "#d4cbc3",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#000",
                    "population": 6.39
                  },
                  "vibrant": {
                    "population": 0,
                    "background": "#947e6a",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff"
                  },
                  "dominant": {
                    "title": "#000",
                    "population": 6.39,
                    "background": "#d4cbc3",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000"
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 1.29,
                    "background": "#785046",
                    "_type": "sanity.imagePaletteSwatch"
                  }
                },
                "hasAlpha": true,
                "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjklEQVQokU3S22vTYBiA8fxnguCd4IWIiAgyEHQoiKgoCO5Cnes87VQRtqngnE7RTZ12c10PaZpjpzjFw3Cbbm2XtlvnuvSQpH2kX/Fw8SNfbp68SV7pSmcXnVcDXLt+k1s9ffT29dPfHxSa993XbhAIdHN7IEgsHKaYs/ErZbxqBb9Wpe55NBp1Go2GIB0+eIj2tjYunj1Nb3cX94YGGXv8iKdPnzD6aJTh4WGCwdvcHRpCicUo5vMi1FKj7ro06v6/4L6dOzi1fw/XT7QxfOk8z+7dYXZqEjkaJhqeZir0mhcTz5l8+YJ3qRS/Nov4rovnuuLqex6+71Ovt6aUju/eRV/7IR6eO8rjjpO8HOwhORtiTleY02RSmoypxrF0hYVvX9koblJyypS2y2xtO8K2U6ZareH7daQzB/YSPHmEB+eOMXLhBK8GezHjM8xbKh9MhQ9WUvj43mDx+wKZtRxr+Q2yuXUydoGMvY5dKFL8VRJhaaDrMvdvdPIg0MFIoIPQ6F1SSkQE560k8ym1FU2pfP38ieWVND8zNj/S/6xm8+IBuUIRKRKeJvI2xNvJcULjY0TeTGDIM7zXZTFhM/pOl1HjM8yZOks/VkjbBdJrLRm7ICbOrRcpbGwimYaKaWjohoqmJlCVKFoigqXGSGlxQZNnmJ2eJGXp5PKF1vcrOUJJnLfJ5fLYto2kJRNoWhLD0DBNHdPUMIwkpqFg6gkMXSapRFESERa+fcFxHDzPxa1VBc+tUdraYmlxUfw0KR6LIMsxEbVMHctqRlvhFhVNV8R5eXmRSqVC3ff+WxuXsuOQzWZJr64iybEoiUQcXU9iWYbQCuoYTYb29w2Wlr5TrVb+LvEfzR10XVf4DWBW6135OD8HAAAAAElFTkSuQmCC",
                "dimensions": {
                  "width": 1080,
                  "aspectRatio": 1.7763157894736843,
                  "height": 608,
                  "_type": "sanity.imageDimensions"
                }
              },
              "size": 563369,
              "_updatedAt": "2023-01-09T20:05:48Z",
              "mimeType": "image/png",
              "_rev": "9Sh1niKpid77KkNKMovyRV",
              "path": "images/y26fxi1c/production/2149d6bbc250a732dff100b91fa0a9670c2601f1-1080x608.png",
              "_id": "image-2149d6bbc250a732dff100b91fa0a9670c2601f1-1080x608-png",
              "extension": "png",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/2149d6bbc250a732dff100b91fa0a9670c2601f1-1080x608.png",
              "_type": "sanity.imageAsset"
            }
          },
          {
            "_key": "e790f3fac51e",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [
                  "em"
                ],
                "text": "\"You need to choose a good time of day for them\"",
                "_key": "ca7fa6c32f3e"
              },
              {
                "_type": "span",
                "marks": [],
                "text": " says Dr Chiou, our pediatric dentist. \"",
                "_key": "5e1d7aa1eb871"
              },
              {
                "_type": "span",
                "marks": [
                  "em"
                ],
                "text": "The time of day can really improve the outcome for children and should be considered when parents schedule appointments.\"",
                "_key": "5e1d7aa1eb872"
              },
              {
                "_type": "span",
                "marks": [],
                "text": " recommend Dr Chiou.",
                "_key": "5e1d7aa1eb873"
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "_key": "7b12795985d4",
            "listItem": "bullet",
            "markDefs": [],
            "children": [
              {
                "marks": [
                  "strong"
                ],
                "text": "For younger kids, factor in their napping schedule when you plan their dental appointment.",
                "_key": "da8097f6ba9f0",
                "_type": "span"
              },
              {
                "_type": "span",
                "marks": [],
                "text": " Kids might be cranky and not have the best experience with the dentist when you schedule a visit at nap time or right after.",
                "_key": "da8097f6ba9f1"
              }
            ],
            "level": 1,
            "_type": "block",
            "style": "normal"
          },
          {
            "children": [
              {
                "text": "Teenagers might not be up for a dental visit if it is after a long day of school and after school activities. ",
                "_key": "730be45d39c00",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              },
              {
                "text": "You might want to schedule their appointment during the weekend. Don’t set them up to fail: choose a time that works best for them.",
                "_key": "730be45d39c01",
                "_type": "span",
                "marks": []
              }
            ],
            "level": 1,
            "_type": "block",
            "style": "normal",
            "_key": "bc3c08197666",
            "listItem": "bullet",
            "markDefs": []
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "5f2bf435d8ac",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "",
                "_key": "ac97abb7de400"
              }
            ]
          },
          {
            "children": [
              {
                "text": "Hungry Child Is a Cranky Patient",
                "_key": "39f6693eaba90",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "c9716465f0ea",
            "markDefs": []
          },
          {
            "_type": "image",
            "_key": "83c586060f8e",
            "asset": {
              "extension": "png",
              "_rev": "wEG01ZVtTimObULAv15Z7z",
              "_createdAt": "2023-01-09T20:07:10Z",
              "uploadId": "UHgE9xbT4HrkIYxJbPhbVYV0vnavPLHa",
              "assetId": "11476ffccfcc96ce26fe7998417e076df29c112f",
              "_updatedAt": "2023-01-09T20:07:10Z",
              "_type": "sanity.imageAsset",
              "size": 713017,
              "sha1hash": "11476ffccfcc96ce26fe7998417e076df29c112f",
              "_id": "image-11476ffccfcc96ce26fe7998417e076df29c112f-1080x718-png",
              "metadata": {
                "blurHash": "VGM%$S%zyqDORj-.M{x^%Mxu.mMxDOo}RPx[aeMdW=oz",
                "_type": "sanity.imageMetadata",
                "palette": {
                  "darkVibrant": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.6,
                    "background": "#592f23",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "lightMuted": {
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 0.47,
                    "background": "#cfaea0",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "vibrant": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0,
                    "background": "#cc5c54"
                  },
                  "dominant": {
                    "title": "#fff",
                    "population": 2.82,
                    "background": "#a36952",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.59,
                    "background": "#372420"
                  },
                  "muted": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 2.82,
                    "background": "#a36952"
                  },
                  "lightVibrant": {
                    "population": 0.17,
                    "background": "#e2b0a0",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff"
                  }
                },
                "hasAlpha": true,
                "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADO0lEQVQ4jSWOW2/bBACF/bd44gFVQiDEA2gwIdAkqFT1AcYkqgJiIMY6CaRCt2mrunXrZaQ0adKmudlxHN/txHZiO3acNGnSFgR/40OUh6Nz9D0cfYIfeliuSlut0VJOUdoVDEvC803CuEuc+MSRS9x3iKLuNbftJh1PI+g7BD2HKOmTjFLCNEbQbQXVkGjrdTSjgeW28HoWURKQDEMGYYdYazBQaiRdg6TvEgUmUd9hkPSI0z5xGpKMEgajFMFw2jieSScw6fg6XmDiBza+Z9N1TByxjLW/SXfvCb3SPmEtTyyXSe02o9gnGycMz4Zk0zGj2RQhGkak45ThJCMZRfi+gaE2kKvH1PM5qs8fc/pgldr3X9D44Tbi2gqth/ewX20S1IvEXZPhOCWbnv1/mI4SsumI6eU5k/kYr6sh14uIx3nEQo7q1jq5rz5l66O32frgTfYXb1BcXaJyfwVx4x56cZ/At4mzAcl4iDBII7LJkMnFhNEkxbVbKOIJlqrgmRpqbovcl7dYf+d1Hiy8xubNtzi6c4uTb5YofLvMycP7GHKFfhQQpRFCFHkkaZ90FBGGLoZaR5NrdB2L0Hfp/Gf720/sLn/CxnsLPL3xBr9/9i6F2x9T+nqZ05/voh3uETg6/biPYOkirtWk67RwzCa6UkVvVbFUCVtr4igidq2M/OIp+bt3eLH4Po8/XGB76SbSr2s4u8/oHOzgyTX8oIMgVnI0K3/Qlo5xLYWe59D33evuOjqWKmMoTcymiFI4oLC+xsbni2x9t4JZLpK5LpHWwlHq6JqEcLizQflwG02uMohDpudzZvNLZrMLJmdTwl6A3pZpSw00uYlcqVDYfcnxwStsQyWKIrquS/X0iEJ+B+HJL6sUc1s4tkaWjTifX3Fx9TeX1/mH6XSO1+kgN+o0azVaokSzIaE0JbS2jKlrSJLE7t4Lnm8/Qnj26EfKxX0sU6XXC0jTIWeTGZPpnPPZFfOLvxgMUtRWi1q5TKVUQqxWUZUWmiKjKjJyS6Z4UqJUziMUD3eoV4+Q5Rq6puB5XQbJkCw7YzyeMpv/eb1N3aBWPuXk6Ihmo46hadd2tmXg9wKCsEcQ+vwLz/c54md4NdAAAAAASUVORK5CYII=",
                "dimensions": {
                  "height": 718,
                  "_type": "sanity.imageDimensions",
                  "width": 1080,
                  "aspectRatio": 1.5041782729805013
                },
                "isOpaque": true
              },
              "originalFilename": "640 (3).png",
              "mimeType": "image/png",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/11476ffccfcc96ce26fe7998417e076df29c112f-1080x718.png",
              "path": "images/y26fxi1c/production/11476ffccfcc96ce26fe7998417e076df29c112f-1080x718.png"
            }
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "05cadf472712",
            "markDefs": [],
            "children": [
              {
                "marks": [],
                "text": "Make sure your child has a light meal an hour before the appointment. If they have to get their cavities filled, it will be one less thing to worry about if they are not hungry during the appointment.",
                "_key": "4370b80c378f0",
                "_type": "span"
              }
            ]
          },
          {
            "markDefs": [],
            "children": [
              {
                "_key": "0133f10a86a40",
                "_type": "span",
                "marks": [],
                "text": ""
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "4960f690d202"
          },
          {
            "_key": "5079a9b39b8d",
            "markDefs": [],
            "children": [
              {
                "text": "Parents, Don't be Anxious!",
                "_key": "d9c101f12b4d0",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "Adults get anxious about dental visits too, and chances are if you’re nervous, your child will pick up on that. Communicate openly with them about what to expect if they ask, but don’t be negative. Let them know that their dentist will answer all of their questions before doing anything, and that there is nothing to fear.",
                "_key": "ae8948e029d70"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "b4a80ba97bcb"
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "e0c0fe113427",
            "markDefs": [],
            "children": [
              {
                "text": "",
                "_key": "cf6fcfeb41bf0",
                "_type": "span",
                "marks": []
              }
            ]
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "f08924469cfa",
            "markDefs": [],
            "children": [
              {
                "text": "Make them feel accomplished \u0026 successful after a good visit",
                "_key": "51e37802a54a0",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              }
            ]
          },
          {
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "You should connect that positive feeling with the idea that their teeth are strong and healthy. Your kids will remember that message for the rest of their lives.",
                "_key": "bbca2d85bc9c0"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "61d520b8d7f7"
          },
          {
            "markDefs": [],
            "children": [
              {
                "_key": "7cfe46a7cc730",
                "_type": "span",
                "marks": [],
                "text": "\n"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "8cdf7e9b5c07"
          },
          {
            "children": [
              {
                "text": "Keep Your Cool",
                "_key": "10ffc0b0716c0",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "96bde0514716",
            "markDefs": []
          },
          {
            "asset": {
              "_updatedAt": "2023-01-09T20:07:59Z",
              "sha1hash": "6da4f5a511eb1b1750775ec5117abf9516f56952",
              "_rev": "3q3ySoeGye0Syz1GmAvnIG",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/6da4f5a511eb1b1750775ec5117abf9516f56952-1080x718.png",
              "originalFilename": "640 (4).png",
              "mimeType": "image/png",
              "path": "images/y26fxi1c/production/6da4f5a511eb1b1750775ec5117abf9516f56952-1080x718.png",
              "size": 661709,
              "metadata": {
                "isOpaque": true,
                "blurHash": "VoMk%{~C-VxaoLxuM{s:WVs:RjWBWBofWBWWj[s:WBof",
                "_type": "sanity.imageMetadata",
                "palette": {
                  "lightMuted": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 8.51,
                    "background": "#a8d0d6"
                  },
                  "vibrant": {
                    "title": "#fff",
                    "population": 7.16,
                    "background": "#3b96a1",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "dominant": {
                    "background": "#a8d0d6",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 8.51
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "title": "#fff",
                    "population": 0.18,
                    "background": "#34616b",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "muted": {
                    "population": 0.43,
                    "background": "#669aa3",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff"
                  },
                  "lightVibrant": {
                    "background": "#a9e4ed",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#000",
                    "population": 0.12
                  },
                  "darkVibrant": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 1.7,
                    "background": "#0d808e"
                  }
                },
                "hasAlpha": true,
                "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC7UlEQVQ4jWWTS28TZxSG/TP6B/gBrYrUTXcV6i+oukDqhpZdN61UVSxAtERClFYFEhruIdBgG5KG3NOQ2CHxJfHdnnE8vsRjfI9t7PgWWUme6nxqJFpGOprF980z73nfcyyVeoNcqUImX2S3UCKUNnnhi/DMH2U6lmBaM5jRDGxhnRF3gFFvkIe+CDddfkY8ASZjCZyZHKFihVStgaXaeEu+XFXQYrXGzpsiC2Edmy/C86CG1R/F7o9iC0QZl5/oSf5O7jIR0rnl9nNnK8SfIY2FRJpAoYyl0+3RbHdotTt0en2KjSbutMlyPMm8ZmAPakyGdBY0g/l4EkfaxJMrKMCoN8RVp4frr7cYD8RYS5tYjo6OOKnj42Oa/QNipSreXAG3mWcunmJGT+JMm+qDZWOXZSPDX5rBsDvAheV1htbcPAvrrAqQ/z2t/gHRcpXtNyWChTKOTI4lI8NmNs9GNs/8TlrBbJEd1fJVp0d5KorFCouoerf2Oj28uaICBAsVXGZeXZSa0gyeBjUFfBFL8Ic3yCN/lJVklleprApIKRTQybvc7ihVckFUus0Cs/EUd7fC/LDo4MclJ48DMZ4ENX5edXFt3avOxYoxf/R9haX9jjqciaeUOgngpZ7kl3Uv56eW+H5+jfvbYaXu25kVvp5c5LeNbZX6bU/gvx4KsPKvQvFNQpC3tCdzd2llg983fcozgXwztcjnD+2ctc7y0+qmSvs9hRJKvFLDYxZUutLeRFhX83b51SZDDje/vt5SgLO2WU6PPObT0ad8ZZ/ju7lVLP1uj263y0G/z+HhIb3BgGyjqYKRIZZxELOlzStrLlU3XD6V7pcTL/no1hif3B7ns/tWzjywYWnWG9RrNVqtFoPBQAFlhaRdaVWSPQHe2w6rVZRVE18vrmzwxcQ0Zx5Y+Xh4jFPX72DptNvs77eUSlHYHQxI7NWVd9ZIHHtkRxkuQAHLzu42miSqdRwZU+32uckFPrz5iA+GhvkHul12yyheo/EAAAAASUVORK5CYII=",
                "dimensions": {
                  "height": 718,
                  "_type": "sanity.imageDimensions",
                  "width": 1080,
                  "aspectRatio": 1.5041782729805013
                }
              },
              "_createdAt": "2023-01-09T20:07:59Z",
              "_type": "sanity.imageAsset",
              "extension": "png",
              "_id": "image-6da4f5a511eb1b1750775ec5117abf9516f56952-1080x718-png",
              "uploadId": "SJVAri2W4JNaHZQlvoNYpywmvlqjJ1C5",
              "assetId": "6da4f5a511eb1b1750775ec5117abf9516f56952"
            },
            "_type": "image",
            "_key": "91d87da18d10"
          },
          {
            "children": [
              {
                "_key": "6f79fed945ae",
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "Don’t panic if things don’t go as planned. "
              },
              {
                "_type": "span",
                "marks": [],
                "text": "So what happens if your child gets upset during the visit? The worst thing you can do is take them out of the dental chair and leave. This might traumatize them even more and next visit won’t be a pleasant one either.\n",
                "_key": "d6c5307ed3fc1"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "52ed323367af",
            "markDefs": []
          },
          {
            "level": 1,
            "_type": "block",
            "style": "normal",
            "_key": "ea799de37e00",
            "listItem": "bullet",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "First, analyze why your child is upset: is my child truly scared or just testing out the situation? Dental office is an unknown territory for any child, and they often feel like they are not in control and get scared. Our dentists have their way with kids and break down each action into small steps, involving the child with them and making them feel accomplished after each step.",
                "_key": "74eb866824630"
              }
            ]
          },
          {
            "_key": "2f03aa5b9f24",
            "listItem": "bullet",
            "markDefs": [],
            "children": [
              {
                "marks": [],
                "text": "Second, ",
                "_key": "bf06befff0280",
                "_type": "span"
              },
              {
                "_key": "bf06befff0281",
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "let the dentist lead the conversation and build a good relationship with your child"
              },
              {
                "_type": "span",
                "marks": [],
                "text": ". In the end of the day, our dentists know how to interact with the little ones!\n",
                "_key": "bf06befff0282"
              }
            ],
            "level": 1,
            "_type": "block",
            "style": "normal"
          },
          {
            "markDefs": [],
            "children": [
              {
                "text": "Maintaining a Healthy Smile",
                "_key": "99fcc19e868e0",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              }
            ],
            "_type": "block",
            "style": "h2",
            "_key": "8b9de2bfb822"
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "55233bfec5da",
            "markDefs": [],
            "children": [
              {
                "_key": "00c56faea7be0",
                "_type": "span",
                "marks": [],
                "text": "With a recommended two dental visits a year, much of a child’s oral health is dependent on routine care at home and depending on the child’s age, the responsibility for ensuring good oral health lands with the parents."
              }
            ]
          },
          {
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "Here are a few ways parents can ensure their kids avoid cavities and other dental illnesses:",
                "_key": "3de2af1abb300"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "01daf2162b59"
          },
          {
            "_key": "c4271c8c171f",
            "listItem": "bullet",
            "markDefs": [],
            "children": [
              {
                "_key": "cb5be1017f800",
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "Regular brushing and flossing:"
              },
              {
                "_key": "cb5be1017f801",
                "_type": "span",
                "marks": [],
                "text": " Use toothpaste with fluoride and make sure to change toothbrushes every three months. Have your child brush at least twice a day and floss once."
              }
            ],
            "level": 1,
            "_type": "block",
            "style": "normal"
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "1882e3e26829",
            "listItem": "bullet",
            "markDefs": [],
            "children": [
              {
                "text": "Eating a healthy diet : ",
                "_key": "7f07670e38ad0",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              },
              {
                "text": "You can’t always control what your child eats but by providing healthy food at home and packing a healthy snack you can make sure your child eats a balanced diet full of grains, milk, vegetables, and fruits.",
                "_key": "7f07670e38ad1",
                "_type": "span",
                "marks": []
              }
            ],
            "level": 1
          },
          {
            "markDefs": [],
            "children": [
              {
                "marks": [
                  "strong"
                ],
                "text": "Limit sugar intake:",
                "_key": "8c25bc0cfce20",
                "_type": "span"
              },
              {
                "_type": "span",
                "marks": [],
                "text": " It’s no secret that kids love sugar, but sugar can be abysmal for a child’s oral health, so try to cut back or eliminate sugary foods and soft drinks.",
                "_key": "8c25bc0cfce21"
              }
            ],
            "level": 1,
            "_type": "block",
            "style": "normal",
            "_key": "847a7dccc17b",
            "listItem": "bullet"
          },
          {
            "_key": "f77e2452995f",
            "listItem": "bullet",
            "markDefs": [],
            "children": [
              {
                "marks": [
                  "strong"
                ],
                "text": "Make sure not to skip your child’s regularly scheduled checkups",
                "_key": "34b40b39c24c0",
                "_type": "span"
              },
              {
                "text": ", and try to plan them around vacations, summer camps, and other activities to ensure that your child still gets the routine cleanings and checkups they need.",
                "_key": "34b40b39c24c1",
                "_type": "span",
                "marks": []
              }
            ],
            "level": 1,
            "_type": "block",
            "style": "normal"
          },
          {
            "markDefs": [],
            "children": [
              {
                "text": "",
                "_key": "42f1f3acaf820",
                "_type": "span",
                "marks": []
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "298d7b56aa77"
          },
          {
            "_type": "block",
            "style": "h4",
            "_key": "a21e579ebf0f",
            "markDefs": [],
            "children": [
              {
                "text": "It's not too late, but get it done soon!",
                "_key": "fdf9fab15d0a0",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              }
            ]
          },
          {
            "asset": {
              "path": "images/y26fxi1c/production/bfe60cfb32f0e79e6a44947b94a01691bcf2a091-1024x512.png",
              "sha1hash": "bfe60cfb32f0e79e6a44947b94a01691bcf2a091",
              "_updatedAt": "2023-01-09T20:09:08Z",
              "_id": "image-bfe60cfb32f0e79e6a44947b94a01691bcf2a091-1024x512-png",
              "_createdAt": "2023-01-09T20:09:08Z",
              "uploadId": "jEDFTL9AFPzL75OIHmdlDhTgbLuymfPX",
              "metadata": {
                "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAACw0lEQVQokR3PbU9SCwDA8bOVeg5p3ZaLbO3aXHertR7XepFla2Vbpd22u55pS8wMETjAOQeBgNQEzFtyYVI+hCLyGApKYKu19abaet3qzX3Z9/i3+gK/7SdEX8wSfTFNLD5FLBrDF4rS4Zpls1aiQVlDtC0jDVUQPTW2qwWMTxb4UMrwbT3LdPw5Z9XntFmStJqT6E1LCIbHLzE8mccQmsMQmOZvJc5eyxyNWhlxqIrkLKPzVhE967RqOVzP5vhSSvK1/JKFyDiXB4PsNk6x836C5gcpBL2cYoc7T4uSZsdAkuaeBE09CSTHCpJ3HcnzGp1vHdFdZZ+WIjgR5XNykk9zYRIjGv/csdJy2U/jtQg6wyxCnTVPvVKkwZql3pShvi9NQ+8iorz8G9Q9rCJ5a4hahf2OecZGw7yPBHgzrhKV79HddYPm9n7qOgPUXYkgNFhziM4CkpxFkgtI1gKSKY3kKP2GdJ4KOncFnbrKX/YFZE+IlVGVgtaHerWbw8fOIx24wYZ2BxsvhhHqB9KIcg6dPYtkyyP2pxHvLyL+KrurSK5VNg2tsethhUsjSzwNhagND5A1XcHd1UFXRyd7T9xiy0kLGzuHEbZaMuiVPC3ODHpblu2mNHpTij9+geoaolykyVnmiL+GJVxgemKKlaCXotJD0nSNGYsRtdfCwQt26s74EPa4ihwIlDnkL3LYX+aor8wRd5FWV4lGRwnRnKNNyXP9UYFBbZFeWwqHluCxc4KAOYjP9gxbX5DjF92Ip4YQ2pw5jo+ucf5plUuRt5wbr3HM/Yo/lSJN8jKN5gynvYv8NxlnaWSMSe+/hP1xRtQIVlOM28YZDFeDdF+w03rKgrCtf56OsVUezH9ATn3kZvQdB5UMW80ZRGuRpoE07Vqa4WCC6sQw/8/Y+bFg53tskM/jMiWfSqHPyNTN65w5e5ef+R3Ln3jFfWkAAAAASUVORK5CYII=",
                "dimensions": {
                  "_type": "sanity.imageDimensions",
                  "width": 1024,
                  "aspectRatio": 2,
                  "height": 512
                },
                "isOpaque": true,
                "blurHash": "MUD,HIBrM_}lAJK5#lsSobS6-Un#s:t6V@",
                "_type": "sanity.imageMetadata",
                "palette": {
                  "darkMuted": {
                    "title": "#fff",
                    "population": 5.28,
                    "background": "#322a33",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "muted": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 1.79,
                    "background": "#618db6",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "lightVibrant": {
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 3.05,
                    "background": "#f9a973",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "darkVibrant": {
                    "population": 4.71,
                    "background": "#083f94",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff"
                  },
                  "lightMuted": {
                    "background": "#d1e0e7",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#000",
                    "population": 2.72
                  },
                  "vibrant": {
                    "title": "#fff",
                    "population": 0.98,
                    "background": "#1067e3",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "dominant": {
                    "title": "#fff",
                    "population": 5.28,
                    "background": "#322a33",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "_type": "sanity.imagePalette"
                },
                "hasAlpha": true
              },
              "size": 611551,
              "_type": "sanity.imageAsset",
              "extension": "png",
              "originalFilename": "640 (5).png",
              "_rev": "3q3ySoeGye0Syz1GmAw1ZJ",
              "assetId": "bfe60cfb32f0e79e6a44947b94a01691bcf2a091",
              "mimeType": "image/png",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/bfe60cfb32f0e79e6a44947b94a01691bcf2a091-1024x512.png"
            },
            "_type": "image",
            "_key": "2a3615852e9d"
          },
          {
            "style": "normal",
            "_key": "1be1c98ca426",
            "markDefs": [],
            "children": [
              {
                "marks": [],
                "text": "Get your child in for their check-up, then relax and enjoy the rest of the week knowing they are ready for school and new activities with a healthy smile.",
                "_key": "ac397bb32a890",
                "_type": "span"
              }
            ],
            "_type": "block"
          },
          {
            "style": "normal",
            "_key": "e2bbe9c980cd",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "Schedule an appointment with our team at French Dentist by calling us at (021) 5169-9696 or request an appointment with us online today by scanning the QR code:",
                "_key": "823bf17b22620"
              }
            ],
            "_type": "block"
          },
          {
            "_type": "image",
            "_key": "82eabf7d8e82",
            "asset": {
              "uploadId": "UF7biKwfDI2DxWak5JgRbTXnIYueEnlX",
              "path": "images/y26fxi1c/production/9ab49bf6722ad91dc897daa32c0ae0a98aae7936-440x444.jpg",
              "_rev": "qLNVIvT2xXiIXINTMgkutQ",
              "metadata": {
                "dimensions": {
                  "aspectRatio": 0.990990990990991,
                  "height": 444,
                  "_type": "sanity.imageDimensions",
                  "width": 440
                },
                "isOpaque": true,
                "blurHash": "eBLN.4-;%Mj[~qofj[M{%MfQ-;M{xuxuD%RjM{%M%MWB~qRjD%oft7",
                "_type": "sanity.imageMetadata",
                "palette": {
                  "lightMuted": {
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 0.01,
                    "background": "#bcb4b5",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "vibrant": {
                    "background": "#86787a",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0
                  },
                  "dominant": {
                    "title": "#fff",
                    "population": 0.61,
                    "background": "#444444",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "background": "#444444",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.61
                  },
                  "muted": {
                    "background": "#847c84",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0
                  },
                  "lightVibrant": {
                    "background": "#c0b8b9",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 0
                  },
                  "darkVibrant": {
                    "background": "#463e3f",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0
                  }
                },
                "hasAlpha": false,
                "lqip": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAQCAwUG/8QAKBAAAQMDAwMDBQAAAAAAAAAAAQIDBAAFEQYSIRNRYSIjQTEyQoGh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOzcojsudLbTcX8mQdm1ZBTjx2rF24yLE24pc555srDeFKKikkfbmtstbsXU7xhMkMuuK9Lh+pH5E/Arn6gvir/EU1JjRorMV7C+mMrWccEUFVqlyHopWy/KdSpRJPY9v1SrbIytdtZLJSsYAJCdvOKUHpLbpe3yptz6xfUFK5HU81PJ0VaG2faS8gqUMlKhz/KUoLm4SIG6PFWtDSTwOD8DxSlKD//Z"
              },
              "assetId": "9ab49bf6722ad91dc897daa32c0ae0a98aae7936",
              "_createdAt": "2023-01-06T11:31:11Z",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/9ab49bf6722ad91dc897daa32c0ae0a98aae7936-440x444.jpg",
              "extension": "jpg",
              "size": 42572,
              "_updatedAt": "2023-01-06T11:31:11Z",
              "sha1hash": "9ab49bf6722ad91dc897daa32c0ae0a98aae7936",
              "mimeType": "image/jpeg",
              "originalFilename": "640 (5).jpeg",
              "_type": "sanity.imageAsset",
              "_id": "image-9ab49bf6722ad91dc897daa32c0ae0a98aae7936-440x444-jpg"
            }
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "8e33435ada02",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "",
                "_key": "2a33b5e20e860"
              }
            ]
          }
        ],
        "slug": {
          "current": "our-secrets-to-a-successful-back-to-school-dental-checkup",
          "_type": "slug"
        }
      },
      {
        "mainImage": {
          "asset": {
            "_updatedAt": "2023-01-06T11:24:41Z",
            "size": 83838,
            "assetId": "3abaf6e5f63d9db349c9577a0c82827740b2550d",
            "_id": "image-3abaf6e5f63d9db349c9577a0c82827740b2550d-650x450-jpg",
            "metadata": {
              "palette": {
                "vibrant": {
                  "title": "#fff",
                  "population": 0,
                  "background": "#888276",
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#fff"
                },
                "dominant": {
                  "foreground": "#fff",
                  "title": "#fff",
                  "population": 8.85,
                  "background": "#76716c",
                  "_type": "sanity.imagePaletteSwatch"
                },
                "_type": "sanity.imagePalette",
                "darkMuted": {
                  "population": 5.58,
                  "background": "#423e38",
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#fff",
                  "title": "#fff"
                },
                "muted": {
                  "title": "#fff",
                  "population": 8.85,
                  "background": "#76716c",
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#fff"
                },
                "lightVibrant": {
                  "foreground": "#000",
                  "title": "#fff",
                  "population": 0,
                  "background": "#c1beb8",
                  "_type": "sanity.imagePaletteSwatch"
                },
                "darkVibrant": {
                  "foreground": "#fff",
                  "title": "#fff",
                  "population": 0,
                  "background": "#46433d",
                  "_type": "sanity.imagePaletteSwatch"
                },
                "lightMuted": {
                  "title": "#fff",
                  "population": 6.46,
                  "background": "#c4c1bb",
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#000"
                }
              },
              "hasAlpha": false,
              "lqip": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAOABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAUGA//EACMQAAIBBAIABwAAAAAAAAAAAAECBAADBRESMQcTFBYhMmH/xAAWAQEBAQAAAAAAAAAAAAAAAAACAQP/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8AtY2fxuSZoUO+He8xAYdD9NY5YNZlW4tiV5Zt29u5G+QqZ8PMRyF+ZDdUOvq677qhzGYGIx8sT7KyZLqRyVQABrqsyI/c+Nx49LPfnIt/DMq7BopMcFAnqkpbZQXVDcd9UVYUf//Z",
              "dimensions": {
                "_type": "sanity.imageDimensions",
                "width": 650,
                "aspectRatio": 1.4444444444444444,
                "height": 450
              },
              "isOpaque": true,
              "blurHash": "VBI=DO%f00R*Rj~q?b?bofxu%Mxu?HRjWBRjD*IU%MM{",
              "_type": "sanity.imageMetadata"
            },
            "_createdAt": "2023-01-06T11:24:41Z",
            "path": "images/y26fxi1c/production/3abaf6e5f63d9db349c9577a0c82827740b2550d-650x450.jpg",
            "uploadId": "QdABzy7LAMmp5vvsieyxMsuMhTpsTFfQ",
            "_rev": "7kXJ15H3JDSJYxAvw12f9r",
            "mimeType": "image/jpeg",
            "originalFilename": "640.jpeg",
            "url": "https://cdn.sanity.io/images/y26fxi1c/production/3abaf6e5f63d9db349c9577a0c82827740b2550d-650x450.jpg",
            "_type": "sanity.imageAsset",
            "extension": "jpg",
            "sha1hash": "3abaf6e5f63d9db349c9577a0c82827740b2550d"
          }
        },
        "title": "Celebrating International Women’s Day: Women in Dentistry",
        "body": [
          {
            "_key": "4ebfad5c21c8",
            "markDefs": [],
            "children": [
              {
                "_key": "690fa9b10a90",
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "A feminist victory in 1740, Madeleine-Françoise Calais: the first female dentist in France."
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "a8d23412896e",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "",
                "_key": "07dd5fad58a9"
              }
            ]
          },
          {
            "_key": "eab3c829963c",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "As we celebrated International Women’s Day on Tuesday, let’s take a minute to read about these powerful women who have made a tremendous impact on Dentistry.",
                "_key": "b4cbaf1e70e6"
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "_key": "beb7ba2b794a",
            "markDefs": [],
            "children": [
              {
                "text": "Madeleine-Françoise Calais has been referred to as the first female dentist in France. She was a native of Paris, France. In 1732, when she was eighteen years old, she was accepted as a student of the dentist Gérandly of Paris. She graduated in 1735, and worked as dentist assistant for the following five years. In 1740, wished to practice independently as a dentist and consequently applied for a license as a master dentist from the Surgical Society of Paris. ",
                "_key": "9fca3f36f1e7",
                "_type": "span",
                "marks": []
              },
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "She duly past all test of knowledge required. She also had good recommendations from her patients. However, the Surgical Society was hesitant to issue a dentist license. While the dentist profession did not have a guild and was, in theory, not forbidden for women, the license had never before been issued to a woman.",
                "_key": "6065aff67294"
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "style": "normal",
            "_key": "40b738d2cc3f",
            "markDefs": [],
            "children": [
              {
                "text": "The Surgical Society therefore consulted the Parlement. One of the members of Parliament, Pelletier, supported her request, as did Gabriel Bachelier, valet de chambre to the king. The royal surgeon of the king, François Gigot de la Peyronie initially opposed the request in a letter of 21 October 1740. ",
                "_key": "fe6b67a8b964",
                "_type": "span",
                "marks": []
              },
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "However, la Peyronie reconsidered and eventually recommended that her request be granted with the motivation that few professions were legal for women and hard working and intelligent women must give some legal opportunity to support themselves.",
                "_key": "ea80c2200b2d"
              }
            ],
            "_type": "block"
          },
          {
            "markDefs": [],
            "children": [
              {
                "text": "",
                "_key": "b33627af4d1a",
                "_type": "span",
                "marks": []
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "de4fef50b148"
          },
          {
            "children": [
              {
                "marks": [],
                "text": "Her request was therefore granted, and she was allowed to open her own dentist practice. She is noted to have had some success, particularly among women.",
                "_key": "7e86863c97b1",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "4146b6622339",
            "markDefs": []
          },
          {
            "style": "normal",
            "_key": "fe8852ea4505",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "1855: Emeline Roberts Jones: The first practicing female dentist in the United States",
                "_key": "87805345d935"
              }
            ],
            "_type": "block"
          },
          {
            "_type": "image",
            "_key": "e768056326fb",
            "asset": {
              "uploadId": "H1FzVqt36NiJRgOimwqj5EkqR2YE9r1o",
              "_rev": "iN6TuuM6qogK4psdeUcz0u",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/6b747a2ce9f50be4160e9bf3cb6b5e2838e23800-120x159.jpg",
              "size": 4427,
              "originalFilename": "640 (1).jpeg",
              "_type": "sanity.imageAsset",
              "_createdAt": "2023-01-06T11:25:56Z",
              "path": "images/y26fxi1c/production/6b747a2ce9f50be4160e9bf3cb6b5e2838e23800-120x159.jpg",
              "assetId": "6b747a2ce9f50be4160e9bf3cb6b5e2838e23800",
              "sha1hash": "6b747a2ce9f50be4160e9bf3cb6b5e2838e23800",
              "_updatedAt": "2023-01-06T11:25:56Z",
              "mimeType": "image/jpeg",
              "_id": "image-6b747a2ce9f50be4160e9bf3cb6b5e2838e23800-120x159-jpg",
              "metadata": {
                "isOpaque": true,
                "blurHash": "dhNKFvxu~qof-;ofRkfQ-;ayozRkM{RjWBof?bayRjof",
                "_type": "sanity.imageMetadata",
                "palette": {
                  "muted": {
                    "title": "#fff",
                    "population": 5.01,
                    "background": "#737575",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "lightVibrant": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#000",
                    "population": 0.03,
                    "background": "#fcf4ec"
                  },
                  "darkVibrant": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0,
                    "background": "#724212",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "lightMuted": {
                    "background": "#bcbbb7",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 5.92
                  },
                  "vibrant": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0,
                    "background": "#dc7f22"
                  },
                  "dominant": {
                    "background": "#484b4e",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 6.09
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 6.09,
                    "background": "#484b4e"
                  }
                },
                "hasAlpha": false,
                "lqip": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAbABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAYHBQj/xAAkEAACAgIBAwQDAAAAAAAAAAABAgMEAAURBhIhBxMxQTJhcf/EABYBAQEBAAAAAAAAAAAAAAAAAAECAP/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwC/9c7yxqqsK0wnuzSiMM/wv7OKOw6tt6W/BYntJNUkIjKqAO1s2vUKem2uMNmWESswMaO3BJxRXV17kMcVtY1VpA58+CRkssVC4lupHMD+Q5wxcpyGKuiRk9oHA4wzUxLPWTpC1a2st6OSXuQd6EE+P5iKbm32k1Cten7YV4VWQEHkfZzqjf14Z6D+7Gr8DxziRoNRr5dwokqRMFPI5X4OVYmN3pLUzR6Gsth27+Pv54wxrUBVAA4A+sMIX//Z",
                "dimensions": {
                  "_type": "sanity.imageDimensions",
                  "width": 120,
                  "aspectRatio": 0.7547169811320755,
                  "height": 159
                }
              },
              "extension": "jpg"
            }
          },
          {
            "_key": "39dce1737752",
            "markDefs": [],
            "children": [
              {
                "_key": "7a9168854fa8",
                "_type": "span",
                "marks": [],
                "text": "A New England native, Emeline Roberts married dentist Daniel Jones in 1854 at the age of 18. "
              },
              {
                "text": "He believed that women were not suited to dentistry but Emeline persisted in secretly studying dentistry. After she had secretly filled and extracted several hundred teeth -her husband allowed her to practice with him. She was 19.",
                "_key": "8e5a687d2f9a",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              },
              {
                "_type": "span",
                "marks": [],
                "text": " When she was 23, she became his partner, and when her husband died in 1865, she took over the practice and traveled around Connecticut and Rhode Island before settling in New Haven. Her career spanned 6 decades and in 1914 was made an honorary member of the National Dental Association.",
                "_key": "5185edb6f128"
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "markDefs": [],
            "children": [
              {
                "marks": [],
                "text": "",
                "_key": "2a1cb61b8597",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "f586db2784a3"
          },
          {
            "style": "normal",
            "_key": "df5e0ee6a1cf",
            "markDefs": [],
            "children": [
              {
                "text": "1866: Lucy Hobbs Taylor, The first woman to receive a DDS",
                "_key": "f1312f3c6eca",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              }
            ],
            "_type": "block"
          },
          {
            "hotspot": {
              "width": 1,
              "x": 0.5,
              "y": 0.5,
              "height": 1,
              "_type": "sanity.imageHotspot"
            },
            "_type": "image",
            "_key": "55e8b70266ba",
            "asset": {
              "metadata": {
                "palette": {
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "title": "#fff",
                    "population": 7.29,
                    "background": "#323232",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "muted": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 2.16,
                    "background": "#848484",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "lightVibrant": {
                    "title": "#fff",
                    "population": 0,
                    "background": "#bcbcbc",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000"
                  },
                  "darkVibrant": {
                    "title": "#fff",
                    "population": 0,
                    "background": "#424242",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "lightMuted": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 10.55,
                    "background": "#bcbcbc"
                  },
                  "vibrant": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0,
                    "background": "#7f7f7f",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "dominant": {
                    "background": "#bcbcbc",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 10.55
                  }
                },
                "hasAlpha": false,
                "lqip": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAaABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAcCBAYI/8QAKRAAAgEEAQMCBgMAAAAAAAAAAQIDAAQFEQYHEiEUMRMiQUJRkWKB0f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwB0855FexubXGIGPd2kk6H7rLYzN5PHXIkv2WME7ATyD/dTz99aLIYp5k9Qzdwj3smp5CzivMVF2yJEisGLnxofgUDPxmXhurNJHYKx8EUUu4rtFQBLhND+VFBguqWMl45ylp7lZPRTt3JOPt3/AJVW+5P66ygs4bqOUIPmKnZYfSnj1Rt4Z+JXfxoo5NLsd6g6/dc4dELeGTqNKkkUbIPZWUEDzQOriPAYrjBwz5BWE0u30fcA+1FNJAAoAGhqig//2Q==",
                "dimensions": {
                  "height": 258,
                  "_type": "sanity.imageDimensions",
                  "width": 196,
                  "aspectRatio": 0.7596899224806202
                },
                "isOpaque": true,
                "blurHash": "dWL;meay~qxu?bj[Rjay?bfQ?bfQayWBM{of?bj[j[of",
                "_type": "sanity.imageMetadata"
              },
              "extension": "jpg",
              "_type": "sanity.imageAsset",
              "sha1hash": "f570c34f5353a56623030a3070de7d5d808e7d49",
              "size": 11080,
              "mimeType": "image/jpeg",
              "_createdAt": "2023-01-06T11:27:03Z",
              "_rev": "qLNVIvT2xXiIXINTMgke7v",
              "assetId": "f570c34f5353a56623030a3070de7d5d808e7d49",
              "path": "images/y26fxi1c/production/f570c34f5353a56623030a3070de7d5d808e7d49-196x258.jpg",
              "uploadId": "rnsEThJYzhsiF8xNUARwmlAY98gnV9L7",
              "originalFilename": "640 (2).jpeg",
              "_id": "image-f570c34f5353a56623030a3070de7d5d808e7d49-196x258-jpg",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/f570c34f5353a56623030a3070de7d5d808e7d49-196x258.jpg",
              "_updatedAt": "2023-01-06T11:27:03Z"
            },
            "crop": {
              "right": 0,
              "top": 0,
              "left": 0,
              "bottom": 0,
              "_type": "sanity.imageCrop"
            }
          },
          {
            "_key": "b3f0ee365462",
            "markDefs": [],
            "children": [
              {
                "_key": "7e032bb000ec",
                "_type": "span",
                "marks": [],
                "text": "While Emeline Roberts Jones was the first woman to practice dentistry in 1855, "
              },
              {
                "text": "it wasn’t until 1866 that the first woman earned her DDS. That honor went to Lucy Hobbs Taylor",
                "_key": "57b26e83ef48",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              },
              {
                "_type": "span",
                "marks": [],
                "text": " (born in 1833). Dr. Taylor and her 9 siblings were orphaned when she was 12, and she spent much of her childhood supporting her family by working as a seamstress. She still devoted time to her education and moved to Michigan where she taught for 10 years. In this time, she discovered her passion for medicine and moved to Cincinnati to apply to the Eclectic Medical College.",
                "_key": "497a52e0fafa"
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "markDefs": [],
            "children": [
              {
                "marks": [],
                "text": "Because of her gender, Dr. Taylor was denied entry, and so she went directly to the faculty: A supervisor from EMC tutored her and from there she applied to the Ohio College of Dentistry. Refused admission again, she studied with Dr. Jonathan Taft of the Ohio College of Dentistry. She opened her own practice in Cincinnati in 1861, and finally, 7 years after she had moved to begin her dentistry studies, ",
                "_key": "be779500ae2e",
                "_type": "span"
              },
              {
                "text": "she received her DDS in 1866 through the Ohio College of Dental Surgery. Dr. Taylor met her husband the following year and her love for her work was contagious: She convinced him to pursue dentistry and the pair practiced for another 20 years.",
                "_key": "ff363b69ce1b",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "7b5b3f91fc2d"
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "18aac45dfeb4",
            "markDefs": [],
            "children": [
              {
                "_key": "a2f46076f7b2",
                "_type": "span",
                "marks": [],
                "text": "By 1900, nearly 1,000 women had followed in Lucy Hobbs Taylor’s wake and went into dentistry."
              }
            ]
          },
          {
            "style": "normal",
            "_key": "2c3dc05cc99d",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "",
                "_key": "3154122f6094"
              }
            ],
            "_type": "block"
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "99c34516aea0",
            "markDefs": [],
            "children": [
              {
                "_key": "355d8d7a9e1c",
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "1895: Lilian Lindsay became the first licensed female dentist in Britain"
              }
            ]
          },
          {
            "asset": {
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/eda007b11bd48a6accb85c1669bbf7d841f85c48-449x448.jpg",
              "metadata": {
                "blurHash": "eE9%#J.8E3j^?H~p%MIqj]%2RjfRxut7WCIWWC%2ofNHSiofxFRjNG",
                "_type": "sanity.imageMetadata",
                "palette": {
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "background": "#3c372a",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 5.42
                  },
                  "muted": {
                    "title": "#fff",
                    "population": 6.52,
                    "background": "#727576",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "lightVibrant": {
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 0,
                    "background": "#d4baa4",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "darkVibrant": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0,
                    "background": "#442c14"
                  },
                  "lightMuted": {
                    "population": 6.03,
                    "background": "#cabeaf",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff"
                  },
                  "vibrant": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.01,
                    "background": "#6e4e34"
                  },
                  "dominant": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 6.52,
                    "background": "#727576",
                    "_type": "sanity.imagePaletteSwatch"
                  }
                },
                "hasAlpha": false,
                "lqip": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUEBv/EACUQAAEDBAEDBQEAAAAAAAAAAAEAAgMEBRESIQYTIgcUMUFRcf/EABgBAAIDAAAAAAAAAAAAAAAAAAECAAME/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAECERL/2gAMAwEAAhEDEQA/AJ15qhI5zQTz+KF6g0VroKO3Ch2929m0pJzsuYresKi2XnvQOae3kavGRypl36nkulPTRysjDo3HzaOTlC4dPdJFJLMNTZcNHwEU8T+IyfpEnIdIl6YJKiVzs52WEDUsxlEWgrLjOWj+IiJQn//Z",
                "dimensions": {
                  "aspectRatio": 1.0022321428571428,
                  "height": 448,
                  "_type": "sanity.imageDimensions",
                  "width": 449
                },
                "isOpaque": true
              },
              "originalFilename": "640 (3).jpeg",
              "_rev": "7kXJ15H3JDSJYxAvw13WIU",
              "uploadId": "YqOITWymeADUaqa8dNCwMBcy1MARCrJB",
              "size": 24630,
              "path": "images/y26fxi1c/production/eda007b11bd48a6accb85c1669bbf7d841f85c48-449x448.jpg",
              "assetId": "eda007b11bd48a6accb85c1669bbf7d841f85c48",
              "extension": "jpg",
              "sha1hash": "eda007b11bd48a6accb85c1669bbf7d841f85c48",
              "_updatedAt": "2023-01-06T11:28:06Z",
              "_id": "image-eda007b11bd48a6accb85c1669bbf7d841f85c48-449x448-jpg",
              "mimeType": "image/jpeg",
              "_createdAt": "2023-01-06T11:28:06Z",
              "_type": "sanity.imageAsset"
            },
            "_type": "image",
            "_key": "2c14b0d344eb"
          },
          {
            "style": "normal",
            "_key": "659f1da92f6d",
            "markDefs": [],
            "children": [
              {
                "marks": [],
                "text": "Born in 1871, she was the first woman to qualify as a dentist in the UK and the first female member and subsequently President of the British Dental Association (BDA).",
                "_key": "f226add7cb0a",
                "_type": "span"
              }
            ],
            "_type": "block"
          },
          {
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "Educated at Camden School for Girls, Lindsay won a scholarship to study at the North London Collegiate School. She defied the advice of the headmistress to train as a teacher and decided to become a dentist.",
                "_key": "d5bf05455c17"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "58bde1346058",
            "markDefs": []
          },
          {
            "style": "normal",
            "_key": "6dc4036e3738",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "She applied to study at the National Dental Hospital in London, but her application was rejected. She had to take her LDS in Edinburgh as no English dental school would accept a woman and she qualified with honours in 1895.",
                "_key": "a8d91e49446b"
              }
            ],
            "_type": "block"
          },
          {
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "In 1920, she moved with her husband Robert back to London, took a new role as Honorary Librarian at the BDA and put together the country’s first dental library. She devoted herself to the history of dentistry, writing books and over 50 journal articles.",
                "_key": "89bf12a9db7b"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "5ca0bd1ba32e",
            "markDefs": []
          },
          {
            "markDefs": [],
            "children": [
              {
                "_key": "75d8fd5d7bfc",
                "_type": "span",
                "marks": [],
                "text": ""
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "a9bff8c06512"
          },
          {
            "_key": "2ce718a3150f",
            "markDefs": [],
            "children": [
              {
                "marks": [
                  "strong"
                ],
                "text": "1904-1905: Faith Sai So Leong, also called Sai So Yeong, became the first Chinese-American woman to graduate from a school of dentistry and become a dentist in the United States.",
                "_key": "f3487f1b5279",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "_type": "image",
            "_key": "1a18af6eaeaa",
            "asset": {
              "_type": "sanity.imageAsset",
              "extension": "jpg",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/17c15f7f4d3e42d2a0c81cd8d0aa3432d27a6750-188x268.jpg",
              "originalFilename": "640 (4).jpeg",
              "_rev": "7kXJ15H3JDSJYxAvw13iGw",
              "sha1hash": "17c15f7f4d3e42d2a0c81cd8d0aa3432d27a6750",
              "size": 10981,
              "_id": "image-17c15f7f4d3e42d2a0c81cd8d0aa3432d27a6750-188x268-jpg",
              "path": "images/y26fxi1c/production/17c15f7f4d3e42d2a0c81cd8d0aa3432d27a6750-188x268.jpg",
              "_createdAt": "2023-01-06T11:28:53Z",
              "_updatedAt": "2023-01-06T11:28:53Z",
              "metadata": {
                "hasAlpha": false,
                "lqip": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAdABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAYHCAT/xAAlEAACAQMDBAIDAAAAAAAAAAABAgMABAUGERIVITFBB2ETMlH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AkXThc5RZHU8eYFd3RBPfsiRkkP2FNmExFrkL+Gwlu1tZHBIYj2PRp40bo+XrH52gS7tUm4Oyt+pH9FAsWelJY7dVlUBh6J7iitDXuKwjSg3kMccpUdvqigyPd5nNTXJltbeONlHnbxTx8O6tyl1rI2ckqxwykzTIvshdqlc+RuJluBzK9t9xXV8Z5ufFaiMqKJHeNlPI7UGv8tG15crKpG3ADzRU7n1PdKycUUAoD5+qKD//2Q==",
                "dimensions": {
                  "aspectRatio": 0.7014925373134329,
                  "height": 268,
                  "_type": "sanity.imageDimensions",
                  "width": 188
                },
                "isOpaque": true,
                "blurHash": "dBFPHS00~qt79F?bM{M{00_3ofRjayWBRj%M-;xuD%j[",
                "_type": "sanity.imageMetadata",
                "palette": {
                  "lightMuted": {
                    "title": "#fff",
                    "population": 1.61,
                    "background": "#bcbcbc",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000"
                  },
                  "vibrant": {
                    "background": "#7f7f7f",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0
                  },
                  "dominant": {
                    "title": "#fff",
                    "population": 7.02,
                    "background": "#444444",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 7.02,
                    "background": "#444444",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "muted": {
                    "background": "#8b8b8b",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 5.13
                  },
                  "lightVibrant": {
                    "title": "#fff",
                    "population": 0,
                    "background": "#bcbcbc",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000"
                  },
                  "darkVibrant": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0,
                    "background": "#424242",
                    "_type": "sanity.imagePaletteSwatch"
                  }
                }
              },
              "uploadId": "QUxj2OKK0lGtVQezLrdEdp8LBmwU7ABz",
              "mimeType": "image/jpeg",
              "assetId": "17c15f7f4d3e42d2a0c81cd8d0aa3432d27a6750"
            },
            "crop": {
              "_type": "sanity.imageCrop",
              "right": 0,
              "top": 0,
              "left": 0,
              "bottom": 0
            },
            "hotspot": {
              "y": 0.5,
              "height": 1,
              "_type": "sanity.imageHotspot",
              "width": 1,
              "x": 0.5
            }
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "d3ddcbe7621c",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "",
                "_key": "123a80e5ee6b"
              }
            ]
          },
          {
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "Born in China,and adopted as Sai So Yeong by Mrs. E J Nickerson, an English teacher, in San Francisco at age 13, Faith was encouraged to pursue dentistry by a cousin who was also a dentist.",
                "_key": "5f516ae90f2d"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "0282814d0bb5"
          },
          {
            "markDefs": [],
            "children": [
              {
                "marks": [
                  "strong"
                ],
                "text": "She was 24 years old when she became the first woman to graduate from the College of Physicians and Surgeons",
                "_key": "513d35f9320c",
                "_type": "span"
              },
              {
                "_type": "span",
                "marks": [],
                "text": " (now the University of the Pacific Arthur A. Dugoni School of Dentistry) ",
                "_key": "84d4bc734255"
              },
              {
                "marks": [
                  "strong"
                ],
                "text": "in 1904.",
                "_key": "aa1b86f54312",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "82c8f16113fc"
          },
          {
            "style": "normal",
            "_key": "4179e15b9a1d",
            "markDefs": [],
            "children": [
              {
                "marks": [
                  "strong"
                ],
                "text": "She became the first woman of any race to graduate from the College of Physicians and Surgeons.",
                "_key": "1943651ab2b0",
                "_type": "span"
              }
            ],
            "_type": "block"
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "eb725e816431",
            "markDefs": [],
            "children": [
              {
                "marks": [],
                "text": "In 1905 she was awarded the Doctor of Dental Surgery from that school, and after a trial of the State Board of Dental Examiners, which delayed the awarding of licenses, she was granted a dental license in August 1905.",
                "_key": "7101aa6cff4b",
                "_type": "span"
              }
            ]
          },
          {
            "style": "normal",
            "_key": "43683ae6bca1",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "With all of that said, we’d like to send warm wishes to all our amazing patients. And of course to our female employees: ",
                "_key": "2f8ce172830e"
              },
              {
                "text": "\"You are all doing an amazing work and we are extremely proud of having all of you as our great team.",
                "_key": "545c42d03792",
                "_type": "span",
                "marks": [
                  "em"
                ]
              },
              {
                "text": " ",
                "_key": "8400b2b17e9d",
                "_type": "span",
                "marks": []
              },
              {
                "_key": "d59cf927a5da",
                "_type": "span",
                "marks": [
                  "em"
                ],
                "text": "Without you, the clinic would be incomplete. Thank you all for your daily support, efforts and smiles\"."
              }
            ],
            "_type": "block"
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "0e44083f9400",
            "markDefs": [],
            "children": [
              {
                "text": "",
                "_key": "8994bfaf4825",
                "_type": "span",
                "marks": []
              }
            ]
          },
          {
            "markDefs": [],
            "children": [
              {
                "marks": [],
                "text": "And because, one day is not enough, let's celebrate International Women's Day till end of March #FrenchDentist.",
                "_key": "7e02910e3da9",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "743ae7804d95"
          },
          {
            "_key": "c7240d879b06",
            "asset": {
              "extension": "png",
              "_type": "sanity.imageAsset",
              "originalFilename": "640.png",
              "_createdAt": "2023-01-06T11:30:23Z",
              "uploadId": "u9sCtFDgfv3rexh02IhLxVtNNTwiv98k",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/7b955182b88b0319b665d8a3f02a3534c621fd0b-915x515.png",
              "_updatedAt": "2023-01-06T11:30:23Z",
              "assetId": "7b955182b88b0319b665d8a3f02a3534c621fd0b",
              "metadata": {
                "blurHash": "MVK1g.yZNf#jIp^+%LofRjWB~p?Gxa9Gxv",
                "_type": "sanity.imageMetadata",
                "palette": {
                  "lightVibrant": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#000",
                    "population": 7.39,
                    "background": "#e3cbb5"
                  },
                  "darkVibrant": {
                    "background": "#1a0404",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.13
                  },
                  "lightMuted": {
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 3.14,
                    "background": "#aab8c9",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "vibrant": {
                    "population": 0.06,
                    "background": "#446c92",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff"
                  },
                  "dominant": {
                    "title": "#fff",
                    "population": 13.01,
                    "background": "#4d698c",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "title": "#fff",
                    "population": 4.62,
                    "background": "#624234",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "muted": {
                    "title": "#fff",
                    "population": 13.01,
                    "background": "#4d698c",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  }
                },
                "hasAlpha": true,
                "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAADDklEQVQokT2O20/TBwCFf//GnojZ5gyaDbfqYGQITBmpZkAGlksLUrAw6VRKWVckXIqX6gKsQC8UWgVW6CZyaTFGaWWEOlgC0SB2NUArtGNsMxNa9/wt1GQPX87JefhyhPBakNVAgFBwnZd//0Usuvs/0b2MRfH7V9A1alDkpuPQVeN3m5hzfMfFomw+fC+B0qJ8Zh962N3ZQdiORAhvvGArEubVPy95HYvybyz6Jl/H2N15hdfzAKW8GE3pSTz9bYR+ucOKd4ROjYLjokSyM1KxmnsIhzcR1oObrIc2CL4IsxHeIvz7NpGtbTYjfxDZ+pP1YAirxUjRqUxaFXl4b+p57htndd7NSEcjhSdSSE5KRFldyezMQwSLc5qbd2ZwuOYYmfLFGXbPcWtshsGJWZzj99HW11Ei/hSDqgRPn44nU/34PQ4me5qpKfgcUeI7ZGWmYWi/gSDTmKlo7EPZNkCt/gdUegcXrg5xtslGdYudb68YOVsm5XyhmImuRp5M9rJy18aze3YeDXfSoa4k88ghjiYdRFEuQyipN7FHmbaX8gYrZxqs8V5cb6JUY0Kh0lGan0NrlQTfSDdrMz/y7K6dp65+/PcGcJkuIxWnIzq0n6y0FIS9J3somm3xpzKNJS4rrDNSpOpCIq8lJysDbXkeD6xXWLxtYsHRxfyQgUVnD1NGHfKcz0jan4Do4NtvhFUt9jjyS31IvzEjUXWT+/X3fFF9nez8SlJEhzl9Ipm+5nN4zG14rTfwWq4z3d2KrbmG3PSPSNz3FmlH3keoabuF8vJAXHhG24tUY6ZYbaTgYjcFFzo5XV7LsdRkPvngXVTSk0y0a5kfNOCzdzCqr0ctO4XoQAJJB/ZRIZMgXDPfpsPuot3u5lrvOFctY+itE+itk/HNZHPS1KChODebqi+zsDd9hW+oHW+/Hr2yhLyMoxz7+DByqYRBuxXBOepi+udHLCwts7C4zK9Lyzx++pyVQJDA2gbB0CaPlxb5adCG4dJ5THVShnXnMKrLqBCnIhFn0qJV4x4bZTXwG/8BfXtOVNS+wRIAAAAASUVORK5CYII=",
                "dimensions": {
                  "height": 515,
                  "_type": "sanity.imageDimensions",
                  "width": 915,
                  "aspectRatio": 1.7766990291262137
                },
                "isOpaque": true
              },
              "size": 531957,
              "sha1hash": "7b955182b88b0319b665d8a3f02a3534c621fd0b",
              "_id": "image-7b955182b88b0319b665d8a3f02a3534c621fd0b-915x515-png",
              "path": "images/y26fxi1c/production/7b955182b88b0319b665d8a3f02a3534c621fd0b-915x515.png",
              "mimeType": "image/png",
              "_rev": "qLNVIvT2xXiIXINTMgkrHs"
            },
            "_type": "image"
          },
          {
            "style": "normal",
            "_key": "c3fff56b5255",
            "markDefs": [],
            "children": [
              {
                "marks": [
                  "strong",
                  "em"
                ],
                "text": "For more info, to book an appointment, or for feedbacks, scan us:",
                "_key": "7122c1e8caf1",
                "_type": "span"
              }
            ],
            "_type": "block"
          },
          {
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "",
                "_key": "131d33f5a31a"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "cb836badebe1",
            "markDefs": []
          },
          {
            "asset": {
              "_updatedAt": "2023-01-06T11:31:11Z",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/9ab49bf6722ad91dc897daa32c0ae0a98aae7936-440x444.jpg",
              "size": 42572,
              "path": "images/y26fxi1c/production/9ab49bf6722ad91dc897daa32c0ae0a98aae7936-440x444.jpg",
              "mimeType": "image/jpeg",
              "_rev": "qLNVIvT2xXiIXINTMgkutQ",
              "_type": "sanity.imageAsset",
              "uploadId": "UF7biKwfDI2DxWak5JgRbTXnIYueEnlX",
              "sha1hash": "9ab49bf6722ad91dc897daa32c0ae0a98aae7936",
              "_createdAt": "2023-01-06T11:31:11Z",
              "originalFilename": "640 (5).jpeg",
              "_id": "image-9ab49bf6722ad91dc897daa32c0ae0a98aae7936-440x444-jpg",
              "assetId": "9ab49bf6722ad91dc897daa32c0ae0a98aae7936",
              "metadata": {
                "hasAlpha": false,
                "lqip": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAQCAwUG/8QAKBAAAQMDAwMDBQAAAAAAAAAAAQIDBAAFEQYSIRNRYSIjQTEyQoGh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOzcojsudLbTcX8mQdm1ZBTjx2rF24yLE24pc555srDeFKKikkfbmtstbsXU7xhMkMuuK9Lh+pH5E/Arn6gvir/EU1JjRorMV7C+mMrWccEUFVqlyHopWy/KdSpRJPY9v1SrbIytdtZLJSsYAJCdvOKUHpLbpe3yptz6xfUFK5HU81PJ0VaG2faS8gqUMlKhz/KUoLm4SIG6PFWtDSTwOD8DxSlKD//Z",
                "dimensions": {
                  "_type": "sanity.imageDimensions",
                  "width": 440,
                  "aspectRatio": 0.990990990990991,
                  "height": 444
                },
                "isOpaque": true,
                "blurHash": "eBLN.4-;%Mj[~qofj[M{%MfQ-;M{xuxuD%RjM{%M%MWB~qRjD%oft7",
                "_type": "sanity.imageMetadata",
                "palette": {
                  "lightVibrant": {
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 0,
                    "background": "#c0b8b9",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "darkVibrant": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0,
                    "background": "#463e3f",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "lightMuted": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 0.01,
                    "background": "#bcb4b5"
                  },
                  "vibrant": {
                    "background": "#86787a",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0
                  },
                  "dominant": {
                    "background": "#444444",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.61
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "title": "#fff",
                    "population": 0.61,
                    "background": "#444444",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "muted": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0,
                    "background": "#847c84",
                    "_type": "sanity.imagePaletteSwatch"
                  }
                }
              },
              "extension": "jpg"
            },
            "_type": "image",
            "_key": "2626e9ece53b"
          }
        ],
        "slug": {
          "current": "celebrating-international-women-s-day-women-in-dentistry-",
          "_type": "slug"
        }
      },
      {
        "mainImage": {
          "asset": {
            "mimeType": "image/png",
            "path": "images/y26fxi1c/production/91498c9e04e43c706d4e940806cfc79836a5f1e3-1080x720.png",
            "uploadId": "QsjujhNVoiXFav2ughHv0Gi2bPDbxptk",
            "_type": "sanity.imageAsset",
            "sha1hash": "91498c9e04e43c706d4e940806cfc79836a5f1e3",
            "url": "https://cdn.sanity.io/images/y26fxi1c/production/91498c9e04e43c706d4e940806cfc79836a5f1e3-1080x720.png",
            "extension": "png",
            "_createdAt": "2023-01-09T20:50:07Z",
            "metadata": {
              "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADZUlEQVQ4jR3RW09aBwDA8fMp2ERRrHgB5CIgcLiDioe7inJArgqiiBXRMHVembHV1k1rNk3TJUubOZPtpe9Lluxpj/tI/2V9+H2Cn7BcqhDPVViuN1jbarBYzCOXS+y0X3LZPeDN5RHtnW3kTIbvWpv8+f6Ov55+4eeHB067F5xdXHJ7/yMHxyfMJJMIk14fXinGamOT9a1N5nMZpFSSaDKOXCxSbm4TScuIPj+V5Sxvj/a5ODmifXhC5/ySH+4f+fjxictXVySXFhF6tXpsgRCl+jqF6irhVAJ7MIDR5WFGrlDZPSFfzJMIe1nOZdjYeslipUpiZYONk9e8+/DEb0+/8+bqGrmQQxi1u3BLUdKlEslcFl80gi04hT+Woto64LD7mpvDOrftJVobZVL5MtZwDMN0HKnWpnP1E9/fPrDf6ZCYiyPMzqdJylkSWRkpPY83IuEOh1kt5XnXPePmdJ/nVyv8/b7FxcEm3lgS9aSLXrODiUia6t4Z19d37LV2mJr2I9TW1ynVaoQXUvhiYcSZEO6pEFuFDI+dTW4aMp9Pk/z7oc55K4/R7aXPaEVlsmHyBGnWN/h0e8d5p0PA70LYarUpr9XxRiUsARcmlx2b6GQpLrE+J7E+4+TXNT//dOfYy4XQGE2ox82YXN4vUVvZBT6/veD+6BtmQh6EzrdnrDSaBBMRxKAbp2hFtFuQgh7iPidxm4FuxM6ngo9iyIZ6TIt+wkYsGkdOxWhnojwft/jj8pTTRg1h97hLfrNJODPPbEpiatqHxzVJ0ONg1usgYJsgbjUjOyxMGo0oR/RMiP+PF2jXVtgvL3G+kuOxs8vz1RXCfLVOpFQmJC/hiUexuNyMGUyM6nTo9HpGxsYZHDYyOGJGNWphYNyOIxAlna1SKFRJz6UJT0dIReZoFGsIS4UicrnCbCqF3e1BrzOgfaFBqx5kdEDN8MALRtTD6IZ0mEaNiAYrETHAwlSUeGAWv9OLyyYSsIlEnW6Eg+0mB60m6YSEaDZgGRrA2q9ksr8Hm6oHa18PTpUSX38vwUEVkkZNWjuMbNKzYDESMemRDGOkTFoyZi1CcyVHoywT9NgZG1Iz0teDTqnAoFRgVCqYUCpw9irw9Clw9n31hU/1NX51Ly6NGsfwIHZNP6KmH7emn/8AMCD6SDK+bgAAAAAASUVORK5CYII=",
              "dimensions": {
                "width": 1080,
                "aspectRatio": 1.5,
                "height": 720,
                "_type": "sanity.imageDimensions"
              },
              "isOpaque": true,
              "blurHash": "VBDI,w9tTekq^i_NR5E1nhRi9]s:wu-V9u%1J8xuogWE",
              "_type": "sanity.imageMetadata",
              "palette": {
                "vibrant": {
                  "title": "#fff",
                  "population": 1.3,
                  "background": "#da853d",
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#000"
                },
                "dominant": {
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#fff",
                  "title": "#fff",
                  "population": 6.5,
                  "background": "#807a76"
                },
                "_type": "sanity.imagePalette",
                "darkMuted": {
                  "background": "#3c4a48",
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#fff",
                  "title": "#fff",
                  "population": 6.12
                },
                "muted": {
                  "population": 6.5,
                  "background": "#807a76",
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#fff",
                  "title": "#fff"
                },
                "lightVibrant": {
                  "title": "#000",
                  "population": 3.11,
                  "background": "#f5c2b4",
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#000"
                },
                "darkVibrant": {
                  "title": "#fff",
                  "population": 0.78,
                  "background": "#75271e",
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#fff"
                },
                "lightMuted": {
                  "population": 5.83,
                  "background": "#bbaeae",
                  "_type": "sanity.imagePaletteSwatch",
                  "foreground": "#000",
                  "title": "#fff"
                }
              },
              "hasAlpha": true
            },
            "_rev": "wEG01ZVtTimObULAv1B9St",
            "_updatedAt": "2023-01-09T20:50:07Z",
            "assetId": "91498c9e04e43c706d4e940806cfc79836a5f1e3",
            "size": 986477,
            "originalFilename": "640 (6).png",
            "_id": "image-91498c9e04e43c706d4e940806cfc79836a5f1e3-1080x720-png"
          }
        },
        "title": "Alcohol, Teeth \u0026 Dry Mouth",
        "body": [
          {
            "style": "normal",
            "_key": "de71bec8360d",
            "markDefs": [],
            "children": [
              {
                "text": "Do you ever wake up after a night out drinking with your mouth feeling exceptionally dry?",
                "_key": "311b240e55260",
                "_type": "span",
                "marks": []
              },
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": " ",
                "_key": "509cb9d902cb"
              },
              {
                "marks": [],
                "text": "Our tongue sticks to the insides of your cheeks or the roof of your mouth, leaving you gasping for a tall glass of water?\n",
                "_key": "311b240e55261",
                "_type": "span"
              }
            ],
            "_type": "block"
          },
          {
            "children": [
              {
                "_key": "7481ad4973b10",
                "_type": "span",
                "marks": [],
                "text": "Consumption of alcohol can result in a very dry and sticky mouth and tongue. Is this alcohol-induced dry mouth anything to worry about? Or is dry mouth after drinking just an irritating result of having too much fun?"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "fc2038ae4822",
            "markDefs": []
          },
          {
            "_type": "image",
            "_key": "e94591648f87",
            "asset": {
              "size": 180364,
              "assetId": "9e15dc5dd5111a080d80c9e6d4fd07485886e9ed",
              "_updatedAt": "2023-01-09T20:50:38Z",
              "_createdAt": "2023-01-09T20:50:38Z",
              "extension": "png",
              "originalFilename": "640 (7).png",
              "_id": "image-9e15dc5dd5111a080d80c9e6d4fd07485886e9ed-507x338-png",
              "path": "images/y26fxi1c/production/9e15dc5dd5111a080d80c9e6d4fd07485886e9ed-507x338.png",
              "_rev": "wEG01ZVtTimObULAv1BCNc",
              "uploadId": "lghLw3PVayjOvLTauFN2wximW05TlpTr",
              "sha1hash": "9e15dc5dd5111a080d80c9e6d4fd07485886e9ed",
              "metadata": {
                "hasAlpha": true,
                "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADXUlEQVQ4jSWNaVOTBxSF319SxtY6dRwQqFQFEesUWrsACm1xGBycQYHKFhpjEiAJJaQSQvZAIoEgSzZidrZggCQk0NqCA/T3PB1ePjxzzj33zrmC7E4JsspiJOWfMVBShOR6kah9pZeRVJYir7uLpvEB2uZ6xpt/QvvwAerv7iGvrkBWdQPF11Uoa+8iv1+FrOYmgu75U6z9Xajrv2Gg/DJ9xUVIyq8gr6tG0/YYQ0837mEFi5phnP3dTLX9wnjDtyhrvkJ6uxRZdQWv7t1CWl3BwO0yBEVPD0t2G1ZpP5KaCn4r+xx5bRX6rg60Egnq3j7MQ0O80agwdHegevQDsroaXty8Tvu1T2m7eonWq5do+aKIX698gtD+sBHHuBaHehh5yyMGf6xF96ydadUIiq5untQ30NnczGDrY/qaGuj6vo5ndfdpq75FU3kxDWXXqC8vpv7LEhpvlCI03alE8aQV/UAvJqWcGe0oi0YDbw2T6CQSFJ2dTCiV2MfGMKtVGEeGMGlUmNQqplTDGDUqzGOj2MbHcPw5jtDf8jOajqe4/lCz4fdysL3F4fYWW14vC69f49ZqCTudbCwskHS7WZ+fJ+31kgkGyQaCFMJhPmxucrS3y3E2gxDxzJFcesteLCKGZ/l9znJZPiQSJCxWPC9fMdc/yKJEivd3Ge+UKtZ0elITU6R0ejL2GY7icc7yOf47LCB83M9yUtjnJJflaGODQ3+AwvwCedcsO5NGIjIlgRcDhHoHib1UsD4yyrZOT3rSSFpvJOea5Wh9ndN8jtPCPsJxLsPHXJbj3R3+ikbZc70hNTFJ2mAiN+0kO+MSKcx5+Nvr45/VEP9GoxyvJcWi49QWJ9kMp/l9sVRI+1fYDfrJhkNkgn6259xsOuxsz7rIrCyRC/jIrfrJh1c5iEc4SEQvSMY4TMY4SMTIx8Jk3wXZC/oQ5hVSvFo1MZuJxLRV1Ih5kqjFQNxhITljI243E7ebWHPaxZtzf56d75LTVvHep1XjUUoR5hRSlsdURCxTxBwWojYTYcuUSNRmvsisRjFPzNiI2c3ifP446bSLhM0GvFoNniEZQtLjZm1hns3lRba8y6R8F2z7VkTeB7ykg352VgMi5z4d9Ik+Ew6RjYTYDQV4718htbLI/7J2rfXPOEVtAAAAAElFTkSuQmCC",
                "dimensions": {
                  "_type": "sanity.imageDimensions",
                  "width": 507,
                  "aspectRatio": 1.5,
                  "height": 338
                },
                "isOpaque": true,
                "blurHash": "V5J@Rdo}Y4xaX-00%MM{aK-;00%38w%M-;{|t7tl%g-;",
                "_type": "sanity.imageMetadata",
                "palette": {
                  "vibrant": {
                    "title": "#fff",
                    "population": 0,
                    "background": "#ac4c54",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "dominant": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 8.8,
                    "background": "#946767",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 8.71,
                    "background": "#321d1c"
                  },
                  "muted": {
                    "title": "#fff",
                    "population": 8.8,
                    "background": "#946767",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "lightVibrant": {
                    "title": "#000",
                    "population": 0.95,
                    "background": "#f2d0cd",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000"
                  },
                  "darkVibrant": {
                    "title": "#fff",
                    "population": 0,
                    "background": "#5c1c0c",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "lightMuted": {
                    "title": "#fff",
                    "population": 1.23,
                    "background": "#d0b4b5",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000"
                  }
                }
              },
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/9e15dc5dd5111a080d80c9e6d4fd07485886e9ed-507x338.png",
              "mimeType": "image/png",
              "_type": "sanity.imageAsset"
            }
          },
          {
            "children": [
              {
                "text": "",
                "_key": "56862ae5cdb40",
                "_type": "span",
                "marks": []
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "6f466a076e95",
            "markDefs": []
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "6406a9e6639e",
            "markDefs": [],
            "children": [
              {
                "text": "How Does Alcohol Cause Dry Mouth?",
                "_key": "caa296720f6e0",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              }
            ]
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "8b7b861c9609",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "Alcohol will increase the “bad” bacteria in our mouths and lower the amount of “good” bacteria, which can ultimately change the micro biome in our mouths. This can lead to a “decreased flow rate” of saliva.",
                "_key": "efc3396482f70"
              },
              {
                "marks": [],
                "text": " Not having enough saliva causes a condition known as dry mouth (also known as ",
                "_key": "efc3396482f71",
                "_type": "span"
              },
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "xerostomia",
                "_key": "efc3396482f72"
              },
              {
                "_type": "span",
                "marks": [],
                "text": "). That’s why many people report experiencing dry mouth after drinking alcohol.\n",
                "_key": "efc3396482f73"
              }
            ]
          },
          {
            "style": "normal",
            "_key": "e412024ad896",
            "markDefs": [],
            "children": [
              {
                "_key": "09f498500fcc0",
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "Alcohol also acts as a diuretic"
              },
              {
                "marks": [],
                "text": ". This means that your body experiences a decrease in the body fluid volume on account of chronic alcohol intake, resulting in an increased thirst sensation or feeling of dehydration. Heavy drinkers may find themselves increasingly in a state of dehydration or having a dry throat after a night of drinking alcohol.",
                "_key": "09f498500fcc1",
                "_type": "span"
              }
            ],
            "_type": "block"
          },
          {
            "children": [
              {
                "marks": [],
                "text": "\n",
                "_key": "f59b0bd3713d0",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "b9c90a505771",
            "markDefs": []
          },
          {
            "style": "normal",
            "_key": "c8e0de9d75f1",
            "markDefs": [],
            "children": [
              {
                "marks": [
                  "strong"
                ],
                "text": "Is Dry Mouth Really That Bad?",
                "_key": "605a5b89851a0",
                "_type": "span"
              }
            ],
            "_type": "block"
          },
          {
            "_key": "ba118780c2b5",
            "markDefs": [],
            "children": [
              {
                "_key": "f1f06f8fd75f",
                "_type": "span",
                "marks": [],
                "text": ""
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "_type": "image",
            "_key": "2ac33899c299",
            "asset": {
              "path": "images/y26fxi1c/production/6a98b52e976bea84f1f794a07ef079e317a81706-920x613.png",
              "size": 500531,
              "_rev": "9Sh1niKpid77KkNKMp32bJ",
              "mimeType": "image/png",
              "extension": "png",
              "_updatedAt": "2023-01-09T20:51:39Z",
              "sha1hash": "6a98b52e976bea84f1f794a07ef079e317a81706",
              "originalFilename": "640 (8).png",
              "metadata": {
                "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADa0lEQVQ4jT3Q609bBRjH8f43mhh9syXuhcZtOpJ5IYtGQVwYI0S2kDiigkzGYBrIuE7mxqVYpPSU0/b0ek7b09ZC2XoBejntOV0vlIuoMxr3QuM/8DWwxBfP209+z9dkXbXgcAr4/R7CYQXhx3l6O5q50vQyU9ffJfGwn8PgPH9uWinaR/FN3iDunMPQtilpGslEgp+iEWKxCOvrcUx2uxVJElGUAIrs5bu7t+h47ww9zadw3Omkoczxd0Hhn4JMWZrCN96DujKBkUtSrTxBy+fYyqRJp1NkMmlMToeA1yudrJPEFb7uaaP13Ivc/Ph15InPaCiLPNuR+SPjoyhO4R27jmoZo5x7zP7eLvVajXLZoFQqUSxqmCSXiN/vJRwKYDPP0Hv5Au3nX2C8+x2UyS/IWSc4CC1zEFtDdz8g9n0/cdsU5XyK/f09Go1dqtUK5XIZXdcxud1OZNlHOOjF+nCUz9vOcu3iS1j6Wtgyj6BbxzlSLDzLBPglLpCxfsum4z56LnmC1et1KpUKhmGg6yVMHrfrpJ8a8mObG2Og/U16m1/hh95LbE7dIPtgkCP/Ev9uy/wasZCyDJFw3KeYTZ5gtVrtf/D4bZPX4yKoBIiEZYSFCW53NjHw4Slmut7C/OlF/P3t1Gwz/BW305CmSZsHSXnMFLMpKmXj5Mp6iVJRQyvkny88BqNqEHFphtHutxn55AxjHecYvnSahatNZGYH2JNmqYqTaPZJ8iEbxWSMUnqDUmaDYnqDfDJOLrmOySM9bxhRQ3iERe71XeZu13mmuy9w+/3TTLe+Rmiki+zSEEX7OLp3npIqoMUk8hEnWsyNFveSi7jYiXowuZxr+H1uwiGZgNuOZeYWC0NXsQ62Mtt5lsmPXkX8soXUwiBFxzRGYBFDtaHHHGhhgYK6hhZxkA3a2QqJmByiwHFHNRQgpvoJeVdRhFkiC4NIN1uY73gDa+8HPDLfwfDNY8hmjLCVctyJcYyqdgqqyE5QICULmMQ1G36vi9SjOHphC6OQppCJokXX2Fn+hvDwFcS+VoL3vqIQsFBdd1JNeKgnFepJmScJL4WYRCpgI+5ewbS6YkH2Sej5bY4O6vy8V6FW3qGhbXKYcFBcHsY90IYwfI2sKvJbLcvvuwWe1vM8reU4NLbQklE2FBdBSeA/qrkHPo4nqlAAAAAASUVORK5CYII=",
                "dimensions": {
                  "_type": "sanity.imageDimensions",
                  "width": 920,
                  "aspectRatio": 1.500815660685155,
                  "height": 613
                },
                "isOpaque": true,
                "blurHash": "VKMGku0KLN?b$fXTROS5jZ%2W:x]s9V[IUIUWXxaxaay",
                "_type": "sanity.imageMetadata",
                "palette": {
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.14,
                    "background": "#5b493f"
                  },
                  "muted": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 3.52,
                    "background": "#9b755c"
                  },
                  "lightVibrant": {
                    "background": "#efa48c",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 0.04
                  },
                  "darkVibrant": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.08,
                    "background": "#500f05",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "lightMuted": {
                    "background": "#c0a28b",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 7.85
                  },
                  "vibrant": {
                    "background": "#ac4c2c",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0
                  },
                  "dominant": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 7.85,
                    "background": "#c0a28b"
                  }
                },
                "hasAlpha": true
              },
              "_type": "sanity.imageAsset",
              "_createdAt": "2023-01-09T20:51:39Z",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/6a98b52e976bea84f1f794a07ef079e317a81706-920x613.png",
              "_id": "image-6a98b52e976bea84f1f794a07ef079e317a81706-920x613-png",
              "assetId": "6a98b52e976bea84f1f794a07ef079e317a81706",
              "uploadId": "g2HZknHEjMYwigzDrFiEjIyCtotRUJS7"
            }
          },
          {
            "children": [
              {
                "marks": [],
                "text": "It really depends. Having a dry throat after drinking alcohol once or twice a year isn’t a big deal. However, most people experience dry mouth even when they are not drinking. If you take medication that causes dry mouth, adding the dry mouth stress from the occasional cocktail hour on top of your daily dry mouth can have detrimental effects to your oral health.",
                "_key": "4a089dcf0b300",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "f6f66c3e1ddb",
            "markDefs": []
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "bca2ba858200",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "",
                "_key": "0a8b8c12ca790"
              }
            ]
          },
          {
            "children": [
              {
                "marks": [
                  "strong"
                ],
                "text": "Saliva is the #1 protective factor when it comes to shielding your teeth from decay. When the mouth is dry, teeth are left unprotected.",
                "_key": "12f3b4c68d240",
                "_type": "span"
              },
              {
                "marks": [],
                "text": " Indeed, when there is little to no saliva, the minerals teeth require to continually stay healthy aren’t doing their job, and demineralization occurs.",
                "_key": "12f3b4c68d241",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "46a78332d50e",
            "markDefs": []
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "71bf6577c9cb",
            "markDefs": [],
            "children": [
              {
                "marks": [],
                "text": "",
                "_key": "52127c6546e8",
                "_type": "span"
              }
            ]
          },
          {
            "children": [
              {
                "text": "Additionally, many alcoholic beverages are themselves acidic, which is bad news for your biofilm.",
                "_key": "0c12baafe3b40",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              },
              {
                "_type": "span",
                "marks": [],
                "text": " If your drink of choice is not inherently acidic, the alcoholic drinks can still cause the pH to drop in the mouth when consumed. Sipping a glass of wine or two over the course of a two hour meal will force the pH in your mouth to stay below the critical point of 5.5 for a long period of time, which makes cavity-causing bacteria very happy. The pH of beer and wine both sit around 3.2. ",
                "_key": "0c12baafe3b41"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "0f5818cccead",
            "markDefs": []
          },
          {
            "markDefs": [],
            "children": [
              {
                "_key": "9771034b853f0",
                "_type": "span",
                "marks": [],
                "text": ""
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "3ef869570928"
          },
          {
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "Also, consider that sugary beverages have well-documented detrimental effects on tooth health.",
                "_key": "e6dce11cddc40"
              },
              {
                "_type": "span",
                "marks": [],
                "text": " Those negative effects are worse when sugary drinks are sipped over a long period of time rather than consumed quickly. Unfortunately, many mixed drinks are high in sugary juice, sweetened soda, or even contain liquid sugar. And, people are likely to linger over an alcoholic beverage, sipping it slowly.",
                "_key": "e6dce11cddc41"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "2a7f4a6a6f96"
          },
          {
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "While drinking slowly is good for your blood alcohol levels, it can be terrible for your tooth enamel.",
                "_key": "da339a7e99f50"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "6bd6de96cc78",
            "markDefs": []
          },
          {
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "",
                "_key": "405c9a09f1870"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "6b0787a40f2b",
            "markDefs": []
          },
          {
            "children": [
              {
                "_key": "2050dfa08b0a0",
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "What are the Effects of Dry Mouth on Your Health?"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "2baeabb96a09",
            "markDefs": []
          },
          {
            "style": "normal",
            "_key": "531e3d2183c1",
            "markDefs": [],
            "children": [
              {
                "text": "",
                "_key": "d33239971b140",
                "_type": "span",
                "marks": []
              }
            ],
            "_type": "block"
          },
          {
            "asset": {
              "assetId": "6b4e918e0183a6d7164a71b890c7205738b2a083",
              "originalFilename": "640 (9).png",
              "_updatedAt": "2023-01-09T20:53:15Z",
              "path": "images/y26fxi1c/production/6b4e918e0183a6d7164a71b890c7205738b2a083-1080x604.png",
              "uploadId": "tPUkU0agWJQ5MqGRN4MPa4qrJisqC3qa",
              "size": 713012,
              "_rev": "wEG01ZVtTimObULAv1BQWT",
              "_type": "sanity.imageAsset",
              "_id": "image-6b4e918e0183a6d7164a71b890c7205738b2a083-1080x604-png",
              "sha1hash": "6b4e918e0183a6d7164a71b890c7205738b2a083",
              "extension": "png",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/6b4e918e0183a6d7164a71b890c7205738b2a083-1080x604.png",
              "mimeType": "image/png",
              "metadata": {
                "blurHash": "MGM6;t-=00r=00~qIU$*RiM_?bt6RPt8-o",
                "_type": "sanity.imageMetadata",
                "palette": {
                  "darkMuted": {
                    "population": 6.5,
                    "background": "#49392e",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff"
                  },
                  "muted": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 6.52,
                    "background": "#aa786b"
                  },
                  "lightVibrant": {
                    "population": 1.14,
                    "background": "#dfe9fc",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#000"
                  },
                  "darkVibrant": {
                    "background": "#2d1308",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.04
                  },
                  "lightMuted": {
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 7.57,
                    "background": "#d2baaf",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "vibrant": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0,
                    "background": "#ac544c"
                  },
                  "dominant": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 7.57,
                    "background": "#d2baaf"
                  },
                  "_type": "sanity.imagePalette"
                },
                "hasAlpha": true,
                "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAADAElEQVQokR3JW09TBwDA8fM99rSHJSYzJia7JG6Zso053EiFoZtzQ+IkCw636FTIjEEsAi10OiplYkmztgw5Lbe2FNqeXk7vlnJ6O7ScltJ+k/8yH35PP2H9mR7JbqEY3ERLRzjKZ2gqeZr5LM10BC3s4cAvom6/orrr5ii+S2s/S6uk0NzPoKUkKmEPsmjDNW9EsD2+j9s8Tc67+iab+2mOS/scl0s0lT20hERV8lINbnEY2eYoG6ddKdKuFGjmk2jJIIXAOtu2eWwz4wj3f+xl+vebSKKdei5Bq1KgXavSahzTOKhRiUVRttbIu1dQvBvUsimO//+DIs18gnpGIu1b5fnEA+4NXUcYuHCOOwPfsvXPIvW9LO1yhXapSKOgoEghoktWArNG/E/0+E0G5BU75XiIRi5GIxNCSwcJijZGh3/ial83wsBXHfxy5SIrC3PUsmlar7M0YmHUcICU005g1kRg0sCufgrPYz0bhgmidgvlXREt5qUq+1lfMnOz/xLf93QhDOo6Gezt4sW0nnI0RCMWQPVvokoSe6KIbDYT+8uMPGcm9NSEzzSJZH1KwevkMOqhJG2yNDtOf895fug5jzD0TRfXdZ08ezRKXtqmFvFS8oioAT85p5Wg4SH+iRF2noywM/0HoTk9aYeZss/JYXiT1Lod/Z2f6e08Q7/uc4Thy19zo7eLeaMeJRmhKu9Q2XFT8a2SWjQSNI68EZoZJTY3RspqYP+VBdXnoOhdxvnnONd0n3Hho1Nc6z6H8NsVHb/2X8bx0kI5l6SWjlCNByhuOkgsTJL6e4qcdQbFYUb1LKP6VlA9DkqeZTYs09y6quPs6Xf48sMTDHR/gnB3oI+x20P4XP9SzSU43EtSzUR4vfICecGI4nKgrjk4cNtpRAI04mHqIR/ZjVWm7t3i0w9O8v6Jt+g+8y6DFzsQRm58x8zDu8Q8IlomgpZPoso7yC9NRBefo8aSaLJMRXRQ23BRD+6iBbZJr7kYuz3M2fdO8vGpt+nrOM3wpS/4DyKQf2HIrVtzAAAAAElFTkSuQmCC",
                "dimensions": {
                  "aspectRatio": 1.7880794701986755,
                  "height": 604,
                  "_type": "sanity.imageDimensions",
                  "width": 1080
                },
                "isOpaque": true
              },
              "_createdAt": "2023-01-09T20:53:15Z"
            },
            "_type": "image",
            "_key": "5b0b505fa3dc"
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "115b4a4b6ab9",
            "listItem": "bullet",
            "markDefs": [],
            "children": [
              {
                "text": "Difficulty chewing and swallowing, which can then result in poor nutrition",
                "_key": "9234ee356fb40",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              }
            ],
            "level": 1
          },
          {
            "listItem": "bullet",
            "markDefs": [],
            "children": [
              {
                "text": "Bad breath",
                "_key": "bac30035f0a10",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              }
            ],
            "level": 1,
            "_type": "block",
            "style": "normal",
            "_key": "5193746aeea6"
          },
          {
            "style": "normal",
            "_key": "81d2118d07a9",
            "listItem": "bullet",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "A sore tongue or throat;",
                "_key": "89321ad011900"
              }
            ],
            "level": 1,
            "_type": "block"
          },
          {
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "Increase in plaque buildup, tooth decay, and gum disease",
                "_key": "8ae72875b0060"
              }
            ],
            "level": 1,
            "_type": "block",
            "style": "normal",
            "_key": "ec3be4f44dd1",
            "listItem": "bullet"
          },
          {
            "_key": "1bc45d9cd163",
            "listItem": "bullet",
            "markDefs": [],
            "children": [
              {
                "_key": "feb3e92be1f10",
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "Cracked lips"
              }
            ],
            "level": 1,
            "_type": "block",
            "style": "normal"
          },
          {
            "level": 1,
            "_type": "block",
            "style": "normal",
            "_key": "3cd9b16b8f2d",
            "listItem": "bullet",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "Mouth sores or sores at the corners of your mouth",
                "_key": "27f6db173ec60"
              }
            ]
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "b89df53a0524",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "Since dry mouth can impact your oral and overall health, you must treat it.",
                "_key": "e86c1e19116c0"
              }
            ]
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "1833037bc7aa",
            "markDefs": [],
            "children": [
              {
                "text": "",
                "_key": "ec21440d573d0",
                "_type": "span",
                "marks": []
              }
            ]
          },
          {
            "children": [
              {
                "_key": "2532081420130",
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "How to Get Rid of Dry Mouth After Drinking Alcohol?"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "d5a2c60249a5",
            "markDefs": []
          },
          {
            "style": "normal",
            "_key": "9b8f5cd20d00",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "",
                "_key": "898495df753d"
              }
            ],
            "_type": "block"
          },
          {
            "_key": "4185a791f992",
            "asset": {
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/64eaaf4b4a70d1ab8ef75cec42092800a3eb1a1e-1080x720.jpg",
              "path": "images/y26fxi1c/production/64eaaf4b4a70d1ab8ef75cec42092800a3eb1a1e-1080x720.jpg",
              "uploadId": "AL6ztdPJ1L9ggayrCH2SaPG4UyyGxixP",
              "_id": "image-64eaaf4b4a70d1ab8ef75cec42092800a3eb1a1e-1080x720-jpg",
              "extension": "jpg",
              "sha1hash": "64eaaf4b4a70d1ab8ef75cec42092800a3eb1a1e",
              "_rev": "3q3ySoeGye0Syz1GmBEDrM",
              "_createdAt": "2023-01-09T20:52:54Z",
              "assetId": "64eaaf4b4a70d1ab8ef75cec42092800a3eb1a1e",
              "metadata": {
                "_type": "sanity.imageMetadata",
                "palette": {
                  "lightMuted": {
                    "population": 4.72,
                    "background": "#c8af9d",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff"
                  },
                  "vibrant": {
                    "title": "#fff",
                    "population": 1.21,
                    "background": "#c19c7c",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000"
                  },
                  "dominant": {
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 7.8,
                    "background": "#d9bda6",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 1.43,
                    "background": "#6b4635"
                  },
                  "muted": {
                    "population": 1.83,
                    "background": "#a47d63",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff"
                  },
                  "lightVibrant": {
                    "background": "#d9bda6",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 7.8
                  },
                  "darkVibrant": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 3.9,
                    "background": "#391d12",
                    "_type": "sanity.imagePaletteSwatch"
                  }
                },
                "hasAlpha": false,
                "lqip": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAYDBAX/xAAfEAACAgICAwEAAAAAAAAAAAABAgMEABESIQUTQTH/xAAVAQEBAAAAAAAAAAAAAAAAAAAABf/EABcRAQEBAQAAAAAAAAAAAAAAAAABESH/2gAMAwEAAhEDEQA/AHRIXklrqJ9qr8yrHsay7crGxzPs0ddbOLvkUeGadxK5MUW1+d4eNty2q1WV2IZzwIByZFS61ZqVd33LUSV9AFh9wyS5JLXlEUUhChR+jeGOj//Z",
                "dimensions": {
                  "height": 720,
                  "_type": "sanity.imageDimensions",
                  "width": 1080,
                  "aspectRatio": 1.5
                },
                "isOpaque": true,
                "blurHash": "V8MZEtIUa0$%-U~V%L9aV@s:8_s,%Mo0oLsnt6RjWCt7"
              },
              "_type": "sanity.imageAsset",
              "mimeType": "image/jpeg",
              "originalFilename": "640 (7).jpeg",
              "size": 122914,
              "_updatedAt": "2023-01-09T20:52:54Z"
            },
            "_type": "image"
          },
          {
            "style": "normal",
            "_key": "6f3759b45d98",
            "markDefs": [],
            "children": [
              {
                "text": "Do you have to give up alcohol to avoid dry mouth? Not necessarily. While giving up drinking would be ideal for your oral and overall health, chances are good you will imbibe once in a while.",
                "_key": "e0ac544222910",
                "_type": "span",
                "marks": []
              }
            ],
            "_type": "block"
          },
          {
            "_key": "d716f14b5c3e",
            "markDefs": [],
            "children": [
              {
                "marks": [],
                "text": "",
                "_key": "b8aca2af51cc",
                "_type": "span"
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "asset": {
              "size": 263690,
              "_updatedAt": "2023-01-09T20:55:33Z",
              "metadata": {
                "_type": "sanity.imageMetadata",
                "palette": {
                  "darkMuted": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.05,
                    "background": "#34445d"
                  },
                  "muted": {
                    "background": "#987461",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.08
                  },
                  "lightVibrant": {
                    "title": "#fff",
                    "population": 0,
                    "background": "#f3858f",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000"
                  },
                  "darkVibrant": {
                    "background": "#042a34",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.11
                  },
                  "lightMuted": {
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 0.02,
                    "background": "#b4c4c8",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "vibrant": {
                    "background": "#c01222",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.11
                  },
                  "dominant": {
                    "background": "#c01222",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.11
                  },
                  "_type": "sanity.imagePalette"
                },
                "hasAlpha": true,
                "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAACiElEQVQokW2R6y/bURjH+19sw1j2wrXdxVxGXeoytw4zt4wwWzCWjMiWsclMZjJswQQNM2GdDnUrVm3FZZnEEnuDVqsSFqMk+yM+y+/XF8y8+OScPOd5Pud8cyT7jkMs1i3WLDbM1i3WN+ziftVsY82yic2+zebWNhabs2fNbGN9Y1M8E3rMVjurZqt4LrgkI5MGhsf1DI59RaOdQj00wafBIz4PT4oIdfWQjhGdgZnZBfQGE5NT0+imZ9BO6BnQTooOSXLOAzLvlZFx9xGJmYVEpeShSM4j6gTRqfliT3VdE+/bO2hufE1zfQ1vm97wvLae7PtlRKfkI7noH4N3cAJegfG4yxSc85Zz1iv0PzwDbpBTWE5Leyfdqja6G18w0FLLQHcrHaoOCkor8AmKR+LqG46bX4SIi0+YKDyJq08YEUl3aGhuY3RMi7pXRV9zHbqud8yOazAap2ntVJGUWYDk+CtOkwl1d2kkabkl9ParMRr1TIyP0N/VyZeeLr7NmVj+sYRmeIiisqdIjg+exhnPEFGYnleKWjPIys8VzBYrS0vLLMwvYrPZ2bTbGdXpKKl45hQKgy4+cjG2uyzSiTQSD5kCD1kk3pejSEsv4ENPP+trZhx7B+z+drC9s8vh4R92fu2i/qLlVm7xkVCQSEOVBETdFrmmSCM4NpOQ2AzkYUoSYtKorHyFQW/CbrFy4Dhkf8+BfcPGwtwiVS8buBKe/K9QJr9JUEy6SGB0OiFx2YTGZeEfqsT3ajTy2AzKH9fQ36dhfv47JsMsH1XdVFRUEZGQxYVLimORvZ2Rz0udcYULhMjC6uYX7vxt3zD8rieizCqiuLyaoodPUKbmIA2Kw10qzEbwF1Sa/4vXqQSKAAAAAElFTkSuQmCC",
                "dimensions": {
                  "width": 1080,
                  "aspectRatio": 1.7763157894736843,
                  "height": 608,
                  "_type": "sanity.imageDimensions"
                },
                "isOpaque": true,
                "blurHash": "MaIOkQ4nay-;E1~q%MofM{xu_4%LayR*jZ"
              },
              "path": "images/y26fxi1c/production/b90bef194e1bb52a4b89bd5fc8b5973a3882bc1e-1080x608.png",
              "_createdAt": "2023-01-09T20:55:33Z",
              "_rev": "wEG01ZVtTimObULAv1Bi8r",
              "extension": "png",
              "_id": "image-b90bef194e1bb52a4b89bd5fc8b5973a3882bc1e-1080x608-png",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/b90bef194e1bb52a4b89bd5fc8b5973a3882bc1e-1080x608.png",
              "mimeType": "image/png",
              "_type": "sanity.imageAsset",
              "uploadId": "PjJZ8y5rL04H8g1RVj15otOfsPk4kaNi",
              "sha1hash": "b90bef194e1bb52a4b89bd5fc8b5973a3882bc1e",
              "assetId": "b90bef194e1bb52a4b89bd5fc8b5973a3882bc1e",
              "originalFilename": "640 (10).png"
            },
            "_type": "image",
            "_key": "df8a943a6346"
          },
          {
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "In order to stave off dry mouth, try a few of these tips:",
                "_key": "7465deb9d0010"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "2910b9b33e5c",
            "markDefs": []
          },
          {
            "children": [
              {
                "text": "Drink a glass of water between alcoholic beverages.",
                "_key": "e83dbdbdd04e0",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              }
            ],
            "level": 1,
            "_type": "block",
            "style": "normal",
            "_key": "4c8f5b8cfab2",
            "listItem": "bullet",
            "markDefs": []
          },
          {
            "_key": "9af918e88ea6",
            "listItem": "bullet",
            "markDefs": [],
            "children": [
              {
                "text": "Be mindful of how much sugar your drinks are adding to your daily consumption.",
                "_key": "77d40fe652080",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              }
            ],
            "level": 1,
            "_type": "block",
            "style": "normal"
          },
          {
            "listItem": "bullet",
            "markDefs": [],
            "children": [
              {
                "text": "Keep a pack of xylitol gum on hand to chew after you enjoy your drink.",
                "_key": "47ca5921f4410",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              }
            ],
            "level": 1,
            "_type": "block",
            "style": "normal",
            "_key": "97718a5b6f5f"
          },
          {
            "_type": "block",
            "style": "normal",
            "_key": "5f4f0b54bd5e",
            "listItem": "bullet",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "Make sure to brush and rinse with elevated pH products when you get home after a fun evening out.",
                "_key": "c40089ba110f0"
              }
            ],
            "level": 1
          },
          {
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "Drink lots of water the next day.",
                "_key": "1f3277b0881a0"
              }
            ],
            "level": 1,
            "_type": "block",
            "style": "normal",
            "_key": "ec99e461347f",
            "listItem": "bullet"
          },
          {
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "",
                "_key": "b18375c9bc400"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "c2251d45c752"
          },
          {
            "_key": "9b3b320538b8",
            "markDefs": [],
            "children": [
              {
                "_key": "4991bc6dd57f0",
                "_type": "span",
                "marks": [],
                "text": "There is no doubt having drinks with good friends is a lot of fun, but make sure to watch out for how your mouth feels the next day. "
              },
              {
                "text": "If it is sticky and dry, make sure to add a few things to your routine to help protect your teeth!",
                "_key": "4991bc6dd57f1",
                "_type": "span",
                "marks": [
                  "strong"
                ]
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "",
                "_key": "76dbdf1e58a00"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "c8f575bc530a"
          },
          {
            "_key": "fbc7196f1793",
            "asset": {
              "_createdAt": "2023-01-09T20:56:33Z",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/331b7031afc10aaa39f46216226f680ac6388e0c-400x334.png",
              "size": 155530,
              "_rev": "3q3ySoeGye0Syz1GmBFK6r",
              "uploadId": "VHAP7BZBMviRkEZzlqUsGfRTfTgKRniw",
              "sha1hash": "331b7031afc10aaa39f46216226f680ac6388e0c",
              "mimeType": "image/png",
              "path": "images/y26fxi1c/production/331b7031afc10aaa39f46216226f680ac6388e0c-400x334.png",
              "_type": "sanity.imageAsset",
              "_id": "image-331b7031afc10aaa39f46216226f680ac6388e0c-400x334-png",
              "extension": "png",
              "_updatedAt": "2023-01-09T20:56:33Z",
              "assetId": "331b7031afc10aaa39f46216226f680ac6388e0c",
              "originalFilename": "640 (11).png",
              "metadata": {
                "_type": "sanity.imageMetadata",
                "palette": {
                  "darkMuted": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.08,
                    "background": "#2b4957",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "muted": {
                    "population": 7.18,
                    "background": "#6d8c9a",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff"
                  },
                  "lightVibrant": {
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 7.84,
                    "background": "#dbb09a",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "darkVibrant": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.35,
                    "background": "#753722"
                  },
                  "lightMuted": {
                    "title": "#fff",
                    "population": 0.44,
                    "background": "#afc7d3",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000"
                  },
                  "vibrant": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.21,
                    "background": "#c1764a",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "dominant": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 7.84,
                    "background": "#dbb09a"
                  },
                  "_type": "sanity.imagePalette"
                },
                "hasAlpha": true,
                "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEVklEQVQ4jTXS+09TdxjH8f4JS7YscygiKqIynRE14lBEVOIAuUmhIFdRbnZtgZZLpUCv0NLLOaenXHoHRKbcJoowNtFlMcuiWeYf9F56dD988v3hSV755Hm+qgExidEfoc8fpl+MYZTnMQTn0QpxOiZn0BitFKmbyS0sJu9WFRVdJlqtEvdcM7Q5QrTYQzRbZRrHg9wdk1CZ/DH6vHMYvDMYAmF6pQQ6McGDiWmqHpq4eLOU7NNnyczKJutEDheKfqRKa6bVJtPqmKbF9hkcC9IwKqIyign6hCi9QhSDEEUnxun2RqgxWDhbUER6xiHS9+/ncPoBDh1II/PoMfLLNWiG3DTbQjSlMOundvWWFBiap1+ep09OYpASaIUEbXaJwpomDh85zMmMNG6czaEi7wxXvsviYNo+Tpy7RGnnAPWWAHdHRQVLtau3CClw4TM4j15K0OOP0/DITV5xKZdOZaErLyRqvMfSUBvmmqvkHkkj4+gxrtS0Ut3voHbYi2YkgGZEUKJSsGCS3mASnRCnyxul1uSgqOQ2nWVXWXfq+bgs8k/MzpP+WuovZnMiM4PzN29T2j1MtdGJetBDrdlHndmPSsGkJHoxgTYQo8MdRm1yUKXWMH5PzU5ghA+LAm8kC8umRoZKLnD1ZCbn8q9xs01PhWGc6n4nNYMe1ENeVCnMICaUdg99UR5MzlFrctLQ3EbAcJ83kpX3UQ9vAhY2HnViu1PAtZxMTp/Po7ChizLtCJUGK9VGF3cG3Kj0nzGtP0bPVIT7k7OojQ6qNY1MdjfxZ3CcjzEP72UrW6Pd6G/lkXNwH1mnc7lS205J9zDlulEq++xU9btQ/RSIKc1SWOfkrPJZKx6auXztBu0lhazb9XyIungnmIlr67idm803X35BxvFT5FU2U9wxSJnWQrnBRkWfE1WPN0K3J0yXe05BezxzNOjNFF8v4kHJZVadOj4u+/g7PEqwo5yC4+l8+/VXZH9/jgJ1O7e6zJRoLZTprJQbHKg6J+focofpFZM4kutIT7fwhheYGHtExNLD67CNf9dD/JWwMaOrQZ1/huv5P1DX0kHPuJdOp4xm2ENln5OKXieqNntIAa2xVSLPX/Nk9x1Lr96yuPwzS7N+ViMBNhenWZlxIZl7MLU3MmgawBdZJLyxi/hsm+HpJdrtMnWpKzeNSQpoj68hr+wQWttVXnH+GT5Bwu+bQpYlQrKI1+1kwm7DHwoTXtsmvvWWyOYevuWXmKQFWsYlVHdHBbrdEezxVfxPXirxLr3Am1zBLci4XC48nilEWUYISvgCAlJ0gdnVbWY3fmd24zekZ9uYQ0u0pcAGi4Den8C9+FwZ/J/Q05fIsXn8Ux68E04kUSAoSwiSSDC+RGRjl+jmnrImeXWH4dBjmkZ8n8AB+THBlR1lGP7lNZHne8Q394gtrxISphCcowSnJpgWfciyyMziU+Iv9ki++oPE1ltCa79iEpOojS7+A58ZQXqW51hCAAAAAElFTkSuQmCC",
                "dimensions": {
                  "_type": "sanity.imageDimensions",
                  "width": 400,
                  "aspectRatio": 1.1976047904191616,
                  "height": 334
                },
                "isOpaque": true,
                "blurHash": "eDE{@J.83ZRP:$00t7%MoL%MT|M{^4t74.Ndoew_R*NGV@kCWAjst7"
              }
            },
            "_type": "image"
          },
          {
            "children": [
              {
                "_type": "span",
                "marks": [],
                "text": "If your symptoms persist, our dentist can help you manage the symptoms by prescribing a gel or rinse that will help keep your mouth moist. And don’t forget that practicing good oral hygiene is especially important for someone experiencing reduced saliva flow. Brush your teeth daily and clean between your teeth with floss, water flossers, or other interdental cleaners.",
                "_key": "a72cc56abec30"
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "364892e28fa1",
            "markDefs": []
          },
          {
            "_key": "fafb73da5e4b",
            "markDefs": [],
            "children": [
              {
                "_key": "55c7c6ce2af20",
                "_type": "span",
                "marks": [],
                "text": ""
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "_key": "c68d0fb1ff03",
            "markDefs": [],
            "children": [
              {
                "_type": "span",
                "marks": [
                  "em"
                ],
                "text": "Experiencing dry mouth can make you feel uncomfortable. If drinking alcohol is causing you to have dry mouth, don’t hesitate to talk to our dentist about how you can control your symptoms and feel comfortable again!",
                "_key": "a8e5105261e50"
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "_key": "3a30d2b68554",
            "markDefs": [],
            "children": [
              {
                "text": "",
                "_key": "29946b7df18d0",
                "_type": "span",
                "marks": []
              }
            ],
            "_type": "block",
            "style": "normal"
          },
          {
            "_key": "bd49abb64190",
            "asset": {
              "size": 323751,
              "_updatedAt": "2023-01-09T20:57:49Z",
              "sha1hash": "1ef58a10b51ef0b3146b804eedf790d2e6d1c5d5",
              "assetId": "1ef58a10b51ef0b3146b804eedf790d2e6d1c5d5",
              "uploadId": "Hd52EPZOT60D8HLj4QPenbJXv9FgfW07",
              "_type": "sanity.imageAsset",
              "originalFilename": "640 (12).png",
              "_id": "image-1ef58a10b51ef0b3146b804eedf790d2e6d1c5d5-1080x608-png",
              "_rev": "9Sh1niKpid77KkNKMp3fQP",
              "_createdAt": "2023-01-09T20:57:49Z",
              "path": "images/y26fxi1c/production/1ef58a10b51ef0b3146b804eedf790d2e6d1c5d5-1080x608.png",
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/1ef58a10b51ef0b3146b804eedf790d2e6d1c5d5-1080x608.png",
              "metadata": {
                "blurHash": "M,Ihsv%MM{ayj]~q%MRjfQof%Mofayayof",
                "_type": "sanity.imageMetadata",
                "palette": {
                  "lightVibrant": {
                    "foreground": "#000",
                    "title": "#000",
                    "population": 0.01,
                    "background": "#e4bcc8",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "darkVibrant": {
                    "background": "#04182c",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0.03
                  },
                  "lightMuted": {
                    "population": 9.99,
                    "background": "#bdbebf",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff"
                  },
                  "vibrant": {
                    "population": 0,
                    "background": "#157fe9",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff"
                  },
                  "dominant": {
                    "background": "#bdbebf",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 9.99
                  },
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "title": "#fff",
                    "population": 0.01,
                    "background": "#34445c",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  },
                  "muted": {
                    "title": "#fff",
                    "population": 0.02,
                    "background": "#98725a",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  }
                },
                "hasAlpha": true,
                "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAACv0lEQVQokW2RWU+TQRiF+zcUUdyQUqygXVi6UlpKF7S02qIthCotdaHiElnEgKho1GiMRuOSFFGqRlAj3hgvxHtulOgvMCgtoK1QLqCP+T7UaOIkM29y5pznTDKSmakkk58/82VyknQ6zeLiItls9r97dnaW8fFx3o29ZWxsjHj8IWc72+hpbeLq+V5ejo4iyczNk06lSKdTLCwskM0u8fcSQEtLS2JRJpMhMTXFp48fePP6FdevXWJ/k5fIHgddx8PE7t9FMj09QyKZJJFIkpye5nsqxdx8hvlMhh9zc8x++ybqwv1UIsmXr1+ZmHjPs5HH9Pa0s8NppKZKQWODg7P9J5EMxEeIDQ0TG3rKwNAwD568ID48yqORV8SfvmTw8XNRjz0c/uO7cWeA7r5+/MEgZfpy5Ao5WpOWnT4vkvJqL5W1AXbUh3D7w9R4ghgcfuy7mtm9N4o7EMFUG8DoDODa00J9sJVaXzNlZg/bdHZUBivbtGYKVUbyS/RIVhRUoLF6OXS0i47uPjyBCFs0TtyB/Zzuv0zbiVPobD5UlXXsPXCM9pO9BJqjbNVvR2Nx0xyJ0nLwCLoaLzmFWiTCYXE10n/xKrdu3yPU2o66ysO+Qx3EBoe4cu0mtb4QOls9B9ra6eruoSkcpdTsoaaugVM9fZw5dwHHriC5RbrlF8or7Hj8YRpCUfQ2H/kKM0ann5bDnTSGj6CsdCFVW9FY6jBYXSj1DjYpLKhNdTSEDtMUOSoW5Eg1y8C8LUaKtU6URhcFymqxaZOymjLzTtQmNxu2VrFGbkCqqqZYYxdnntwgeoQ/0Fh9FKisrJRWLANXb9aLgqzMxvoSE6tkWtYWVyIrtVFYahMLhZKNCgtF5XbyFRZyi/Ss++URcutKTAgsESiQV8l0YiinUCNeCFMICdpK6W9NS65M8Gj/8vyb+wkhcQMwQYPqdAAAAABJRU5ErkJggg==",
                "dimensions": {
                  "height": 608,
                  "_type": "sanity.imageDimensions",
                  "width": 1080,
                  "aspectRatio": 1.7763157894736843
                },
                "isOpaque": true
              },
              "extension": "png",
              "mimeType": "image/png"
            },
            "_type": "image"
          },
          {
            "markDefs": [],
            "children": [
              {
                "text": "Don’t ignore the warning signs, and get it treated!",
                "_key": "3d6e7af25b260",
                "_type": "span",
                "marks": [
                  "em"
                ]
              }
            ],
            "_type": "block",
            "style": "normal",
            "_key": "99595f626a12"
          },
          {
            "style": "normal",
            "_key": "0f7526efb1eb",
            "markDefs": [],
            "children": [
              {
                "marks": [],
                "text": "",
                "_key": "4d8e98efb4110",
                "_type": "span"
              }
            ],
            "_type": "block"
          },
          {
            "_type": "image",
            "_key": "2ebcc8ca5645",
            "asset": {
              "path": "images/y26fxi1c/production/9ab49bf6722ad91dc897daa32c0ae0a98aae7936-440x444.jpg",
              "sha1hash": "9ab49bf6722ad91dc897daa32c0ae0a98aae7936",
              "_type": "sanity.imageAsset",
              "_rev": "qLNVIvT2xXiIXINTMgkutQ",
              "_createdAt": "2023-01-06T11:31:11Z",
              "_updatedAt": "2023-01-06T11:31:11Z",
              "originalFilename": "640 (5).jpeg",
              "assetId": "9ab49bf6722ad91dc897daa32c0ae0a98aae7936",
              "extension": "jpg",
              "uploadId": "UF7biKwfDI2DxWak5JgRbTXnIYueEnlX",
              "metadata": {
                "hasAlpha": false,
                "lqip": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAQCAwUG/8QAKBAAAQMDAwMDBQAAAAAAAAAAAQIDBAAFEQYSIRNRYSIjQTEyQoGh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOzcojsudLbTcX8mQdm1ZBTjx2rF24yLE24pc555srDeFKKikkfbmtstbsXU7xhMkMuuK9Lh+pH5E/Arn6gvir/EU1JjRorMV7C+mMrWccEUFVqlyHopWy/KdSpRJPY9v1SrbIytdtZLJSsYAJCdvOKUHpLbpe3yptz6xfUFK5HU81PJ0VaG2faS8gqUMlKhz/KUoLm4SIG6PFWtDSTwOD8DxSlKD//Z",
                "dimensions": {
                  "width": 440,
                  "aspectRatio": 0.990990990990991,
                  "height": 444,
                  "_type": "sanity.imageDimensions"
                },
                "isOpaque": true,
                "blurHash": "eBLN.4-;%Mj[~qofj[M{%MfQ-;M{xuxuD%RjM{%M%MWB~qRjD%oft7",
                "_type": "sanity.imageMetadata",
                "palette": {
                  "_type": "sanity.imagePalette",
                  "darkMuted": {
                    "population": 0.61,
                    "background": "#444444",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff"
                  },
                  "muted": {
                    "background": "#847c84",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0
                  },
                  "lightVibrant": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 0,
                    "background": "#c0b8b9"
                  },
                  "darkVibrant": {
                    "foreground": "#fff",
                    "title": "#fff",
                    "population": 0,
                    "background": "#463e3f",
                    "_type": "sanity.imagePaletteSwatch"
                  },
                  "lightMuted": {
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#000",
                    "title": "#fff",
                    "population": 0.01,
                    "background": "#bcb4b5"
                  },
                  "vibrant": {
                    "population": 0,
                    "background": "#86787a",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff",
                    "title": "#fff"
                  },
                  "dominant": {
                    "title": "#fff",
                    "population": 0.61,
                    "background": "#444444",
                    "_type": "sanity.imagePaletteSwatch",
                    "foreground": "#fff"
                  }
                }
              },
              "_id": "image-9ab49bf6722ad91dc897daa32c0ae0a98aae7936-440x444-jpg",
              "mimeType": "image/jpeg",
              "size": 42572,
              "url": "https://cdn.sanity.io/images/y26fxi1c/production/9ab49bf6722ad91dc897daa32c0ae0a98aae7936-440x444.jpg"
            }
          }
        ],
        "slug": {
          "current": "alcohol-teeth-and-dry-mouth",
          "_type": "slug"
        }
      }
    ])
  }, []);
  const { t } = useTranslation();
  console.log(blogs)
  return (
    <div className="blogpage">
      <div className="bloghero">
        <div className="blogherotext">
          <h1 className="h2-bold">
          {t("blog1")}
          </h1>
          <p>
          {t("blog2")}
          </p>
          <p className="mt-5">
            <a className="team-btn" href="tel:+8602151699696">
              {t("callus")}
            </a>
          </p>
        </div>
        <div className="blogheroimage">
          <img src="./homepics/blog.jpeg" alt="blog-photo-dentist" />
        </div>
      </div>

      <div className="blogs">
        <h2 className="h2-bold"> {t("blog3")}</h2>
        <div className="blogtiles">
          <div className="blogContainer">
            <Row>
              {blogs.map((blog) => {

                return (
                  <Col xs={10} md={6} lg={4} >
                    <BlogCard
                      description={blog.body}
                      title={blog.title && blog.title}
                      imgURL={blog.mainImage.asset.url}
                      slug={blog.slug}
                      categories={blog.categories}
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
