#include "SkillTree.h"
#include <iostream>

SkillTree::SkillTree(std::string rootName) {
    root = new SkillNode(rootName);
}

SkillTree::~SkillTree() {
    delete root;
}

void SkillTree::addSkill(std::string parentName, std::string skillName) {
    SkillNode* parent = root->findNode(parentName);
    if (parent) {
        parent->addChild(new SkillNode(skillName));
    }
}

bool SkillTree::hasSkill(std::string skillName) {
    return root->findNode(skillName) != nullptr;
}
