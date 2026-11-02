"use strict";

/* اطلاعات تیم */

const competition = {
    trackingCode: "ISF-1405-NPX7",

    team: {
        name: "NEON PHOENIX",
        slogan: "سه ذهن، یک هدف، بی‌نهایت راه‌حل",

        members: [
            {
                name: "رضا نبهانی",
                role: "مهندس نرم‌افزار",
                skill: "SOFTWARE ENGINEERING",
                initial: "RN",
                image: "assets/members/reza.png"
            },
            {
                name: "محمدرضا شیطاوی",
                role: "توسعه‌دهنده الگوریتم",
                skill: "ALGORITHM DEVELOPMENT",
                initial: "MS",
                image: "assets/members/mohammadreza.png"
            },
            {
                name: "محمد کاظمی",
                role: "تحلیلگر و حل مسئله",
                skill: "PROBLEM SOLVING",
                initial: "MK",
                image: "assets/members/mohammad.jpg"
            }
        ]
    },

    stages: {
        first: {
            date: "۲۶ مهر ۱۴۰۵",
            projectName: "چالش الگوریتم و بهینه‌سازی",
            teamCount: 10,
            rank: 2,
            minutes: 21
        },

        second: {
            date: "۱۴ آبان ۱۴۰۵",
            projectName: "چالش طراحی سیستم هوشمند",
            teamCount: 5,
            rank: 3,
            minutes: 27
        }
    }
};

/*
 * نتایج دو مرحله
 *
 * رتبه و زمان تیم NEON PHOENIX مطابق اطلاعات فعلی پروژه است.
 * زمان سایر تیم‌ها تا زمان ثبت نتایج معتبر، خالی باقی می‌ماند.
 *
 * پس از دریافت نتایج واقعی، نام و زمان هر تیم را وارد کن.
 */

const firstStageResults = [
    { rank: 1, name: "تیم رتبه اول", minutes: 18 },
    { rank: 2, name: "NEON PHOENIX", minutes: 21, isOurTeam: true },
    { rank: 3, name: "تیم رتبه سوم", minutes: 23 },
    { rank: 4, name: "تیم رتبه چهارم", minutes: 25 },
    { rank: 5, name: "تیم رتبه پنجم", minutes: 28 },
    { rank: 6, name: "تیم رتبه ششم", minutes: 30 },
    { rank: 7, name: "تیم رتبه هفتم", minutes: 33 },
    { rank: 8, name: "تیم رتبه هشتم", minutes: 36 },
    { rank: 9, name: "تیم رتبه نهم", minutes: 40 },
    { rank: 10, name: "تیم رتبه دهم", minutes: 44 }
];

const secondStageResults = [
    { rank: 1, name: "تیم رتبه اول", minutes: 21 },
    { rank: 2, name: "تیم رتبه دوم", minutes: 25 },
    { rank: 3, name: "NEON PHOENIX", minutes: 27, isOurTeam: true },
    { rank: 4, name: "تیم رتبه چهارم", minutes: 31 },
    { rank: 5, name: "تیم رتبه پنجم", minutes: 35 }
];
/* دستاوردهای تیم NEON PHOENIX */

const teamAchievements = [
    {
        icon: "🏆",
        title: "حضور در جمع ۳ تیم برتر کشور",
        description:
            "عملکرد تیم در رقابت‌های برنامه‌نویسی و کسب جایگاه برتر کشوری.",
        category: "COMPETITION"
    },
    {
        icon: "🎯",
        title: "مسیر مسابقات کشوری",
        description:
            "برنامه‌ریزی برای حضور در مسابقات کشوری سال آینده، مطابق شرایط و تأیید برگزارکنندگان.",
        category: "NEXT CHALLENGE"
    },
    {
        icon: "💠",
        title: "نشان دیجیتال تیم",
        description:
            "نشان دیجیتال قابل ارائه در رزومه و پروفایل حرفه‌ای؛ پس از صدور یا تأیید نهایی.",
        category: "DIGITAL CREDENTIAL"
    },
    {
        icon: "💰",
        title: "جایزه نقدی",
        description:
            "ثبت دستاورد مالی مسابقه و جزئیات جایزه پس از تأیید مبلغ و دریافت آن.",
        category: "AWARD"
    }
];

/* عناصر صفحه */

const trackingForm = document.getElementById("trackingForm");
const trackingInput = document.getElementById("trackingCode");
const trackingMessage = document.getElementById("trackingMessage");

const teamSection = document.getElementById("team");
const membersGrid = document.getElementById("membersGrid");

const teamNameElement = document.getElementById("teamName");
const teamSloganElement = document.getElementById("teamSlogan");
const displayTrackingCode = document.getElementById("displayTrackingCode");

const leaderboardBody = document.getElementById("leaderboardBody");
const secondLeaderboardBody = document.getElementById("secondLeaderboardBody");

/* ابزار ساخت عنصر HTML */

function createElement(tag, className, textContent) {
    const element = document.createElement(tag);

    if (className) {
        element.className = className;
    }

    if (textContent !== undefined) {
        element.textContent = textContent;
    }

    return element;
}

/* پنجره نمایش دستاوردهای تیم */

let achievementsModal;

function createAchievementsModal() {
    if (achievementsModal) return achievementsModal;

    achievementsModal = createElement(
        "div",
        "achievements-modal hidden"
    );

    achievementsModal.id = "achievementsModal";
    achievementsModal.setAttribute("role", "dialog");
    achievementsModal.setAttribute("aria-modal", "true");
    achievementsModal.setAttribute(
        "aria-labelledby",
        "achievementsTitle"
    );

    const panel = createElement("div", "achievements-panel");

    const header = createElement("div", "achievements-modal-header");

    const heading = createElement("div", "achievements-heading");

    heading.append(
        createElement("span", "section-kicker", "NEON PHOENIX / ACHIEVEMENTS"),
        createElement("h3", "", "تالار دستاوردها")
    );

    const closeButton = createElement(
        "button",
        "achievements-close",
        "×"
    );

    closeButton.type = "button";
    closeButton.setAttribute("aria-label", "بستن پنجره");

    closeButton.addEventListener("click", closeAchievements);

    header.append(heading, closeButton);

    const memberName = createElement(
        "p",
        "achievements-member-name",
        ""
    );

    memberName.id = "achievementsMemberName";

    const intro = createElement(
        "p",
        "achievements-intro",
        "دستاوردهای ثبت‌شده و مسیر حرفه‌ای تیم"
    );

    const grid = createElement("div", "achievements-grid");
    grid.id = "achievementsGrid";

    panel.append(header, memberName, intro, grid);
    achievementsModal.append(panel);

    achievementsModal.addEventListener("click", (event) => {
        if (event.target === achievementsModal) {
            closeAchievements();
        }
    });

    document.body.append(achievementsModal);

    document.addEventListener("keydown", (event) => {
        if (
            event.key === "Escape" &&
            !achievementsModal.classList.contains("hidden")
        ) {
            closeAchievements();
        }
    });

    return achievementsModal;
}

function openAchievements(member) {
    const modal = createAchievementsModal();

    const memberName = document.getElementById(
        "achievementsMemberName"
    );

    const grid = document.getElementById("achievementsGrid");

    memberName.textContent = member.name;
    grid.replaceChildren();

    teamAchievements.forEach((achievement, index) => {
        const card = createElement("article", "achievement-card");

        card.style.setProperty("--achievement-index", index);

        card.append(
            createElement(
                "span",
                "achievement-icon",
                achievement.icon
            ),
            createElement(
                "span",
                "achievement-category",
                achievement.category
            ),
            createElement(
                "h4",
                "",
                achievement.title
            ),
            createElement(
                "p",
                "",
                achievement.description
            )
        );

        grid.append(card);
    });

    modal.classList.remove("hidden");
    document.body.classList.add("modal-open");

    const closeButton = modal.querySelector(".achievements-close");

    if (closeButton) closeButton.focus();
}

function closeAchievements() {
    if (!achievementsModal) return;

    achievementsModal.classList.add("hidden");
    document.body.classList.remove("modal-open");
}

/* نمایش اعضای تیم */

/* نمایش اعضای تیم */

function renderMembers() {
    if (!membersGrid) return;

    membersGrid.replaceChildren();

    competition.team.members.forEach((member, index) => {
        const card = createElement("article", "member-card");

        // سربرگ کارت
        const top = createElement("div", "member-top");

        top.append(
            createElement(
                "span",
                "member-index",
                `MEMBER / 0${index + 1}`
            ),
            createElement("span", "member-role", member.role)
        );

        // کادر تصویر
        const portrait = createElement("div", "member-portrait");

        const orbit = createElement("div", "portrait-orbit");
        const avatar = createElement("div", "portrait-avatar");
        const fallback = createElement("span", "", member.initial);

        avatar.append(fallback);

        // تصویر عضو
        const image = document.createElement("img");

        image.className = "member-photo";
        image.alt = `تصویر ${member.name}`;
        image.loading = "lazy";
        image.decoding = "async";

        // ابتدا تصویر را به کادر اضافه می‌کنیم
        portrait.append(
            image,
            orbit,
            avatar,
            createElement("span", "portrait-caption", "TEAM MEMBER")
        );

        // پس از بارگذاری موفق، آواتار جایگزین تصویر نمی‌شود
        image.addEventListener("load", () => {
            portrait.classList.add("has-photo");
            orbit.remove();
            avatar.remove();
        });

        // اگر تصویر وجود نداشت، حروف اختصاری نمایش داده می‌شوند
        image.addEventListener("error", () => {
            image.remove();
            portrait.classList.remove("has-photo");
        });

        image.src = member.image;

        // اطلاعات عضو
        const info = createElement("div", "member-info");

        info.append(
            createElement("h4", "", member.name),
            createElement("p", "", member.role)
        );

        const skill = createElement("div", "member-skill");

        skill.append(
            createElement("span", "", "حوزه تخصصی"),
            createElement("span", "", member.skill)
        );

       info.append(skill);

card.append(top, portrait, info);

/* کلیک روی کارت عضو برای مشاهده دستاوردها */

card.classList.add("member-card-clickable");
card.setAttribute("tabindex", "0");
card.setAttribute("role", "button");
card.setAttribute(
    "aria-label",
    `مشاهده دستاوردهای ${member.name}`
);

card.append(
    createElement(
        "div",
        "member-achievements-hint",
        "مشاهده دستاوردها ↗"
    )
);

card.addEventListener("click", () => {
    openAchievements(member);
});

card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openAchievements(member);
    }
});

membersGrid.append(card);
    });
}

/* ساخت جدول نتایج هر مرحله */

function renderLeaderboard(results, targetBody) {
    if (!targetBody) return;

    targetBody.replaceChildren();

    results.forEach((team) => {
        const row = createElement("tr");

        if (team.isOurTeam) {
            row.classList.add("our-team-row");
        }

        const rankCell = createElement("td");
        const rankBadge = createElement(
            "span",
            "rank-number",
            String(team.rank).padStart(2, "0")
        );

        if (team.rank === 1) {
            rankBadge.classList.add("rank-first");
        } else if (team.rank === 2) {
            rankBadge.classList.add("rank-second");
        } else if (team.rank === 3) {
            rankBadge.classList.add("rank-third");
        }

        rankCell.append(rankBadge);

        const nameCell = createElement("td", "team-name-cell");

        nameCell.append(
            createElement("span", "", team.name)
        );

        if (team.isOurTeam) {
            nameCell.append(
                createElement(
                    "span",
                    "team-mini-badge",
                    "تیم ما"
                )
            );
        }

      const timeCell = createElement("td", "time-cell");

timeCell.textContent =
    typeof team.minutes === "number"
        ? `${team.minutes} دقیقه`
        : "زمان اعلام نشده";

const statusCell = createElement("td");

const status = createElement(
    "span",
    "result-status",
    team.isOurTeam ? "تیم ما" : "ثبت زمان"
);

statusCell.append(status);

        row.append(rankCell, nameCell, timeCell, statusCell);
        targetBody.append(row);
    });
}

/* نمایش پرونده تیم */

function showTeamProfile() {
    teamNameElement.textContent = competition.team.name;
    teamSloganElement.textContent = competition.team.slogan;
    displayTrackingCode.textContent = competition.trackingCode;

    renderMembers();

    teamSection.classList.remove("hidden");
}

/* بررسی کد رهگیری */

trackingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const enteredCode = trackingInput.value
        .trim()
        .toUpperCase();

    trackingMessage.textContent = "";

    if (enteredCode !== competition.trackingCode) {
        trackingMessage.style.color = "#fda4af";
        trackingMessage.textContent =
            "کد رهگیری معتبر نیست. لطفاً کد واردشده را بررسی کنید.";

        teamSection.classList.add("hidden");
        return;
    }

    showTeamProfile();

    trackingMessage.style.color = "#86efac";
    trackingMessage.textContent =
        "کد رهگیری تأیید شد؛ پرونده تیم آماده مشاهده است.";

    window.setTimeout(() => {
        teamSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 100);
});

/* راه‌اندازی جدول‌های دو مرحله */

renderLeaderboard(firstStageResults, leaderboardBody);
renderLeaderboard(secondStageResults, secondLeaderboardBody);